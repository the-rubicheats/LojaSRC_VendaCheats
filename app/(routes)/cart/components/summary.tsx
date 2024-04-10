"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";

const owner = 'the-rubicheats';
const repo = 'KeyChecker';
const path = 'keys/usedKeys.txt';
const ZeroDoisKey = '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';
const headers = {
  Authorization: `Bearer ${ZeroDoisKey}`,
  'Content-Type': 'application/json'
};

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const [isMounted, setIsMounted] = useState(false);
  const [isMessageShown, setMessageShown] = useState(false);
  const [allNames, setAllNames] = useState<string[]>([]); // Array para armazenar todas os links disponíveis
  const [allLinks, setAllLinks] = useState<string[]>([]); // Array para armazenar todas os nomes disponíveis
  const [allProduct, setAllProduct] = useState<string[]>([]); // Array para armazenar todas os produtos disponíveis
  const [allPrice, setAllPrice] = useState<string[]>([]); // Array para armazenar todas os preços disponíveis
  const [allPlano, setAllPlano] = useState<string[]>([]); // Array para armazenar todas os planos disponíveis

  useEffect(() => {
    setIsMounted(true);
    const names = items.flatMap((item) => item.color.name.split(", ")); // Dividir a string e aplanar a lista de chaves
    setAllNames(names);
    return () => setIsMounted(false);
  }, [items]);

  useEffect(() => {
    setIsMounted(true);
    const link = items.flatMap((item) => item.color.value.split(", ")); // Dividir a string e aplanar a lista de chaves
    setAllLinks(link);
    return () => setIsMounted(false);
  }, [items]);

  useEffect(() => {
    setIsMounted(true);
    const product = items.flatMap((item) => item.name.split(", ")); // Dividir a string e aplanar a lista de chaves
    setAllProduct(product);
    return () => setIsMounted(false);
  }, [items]);

  useEffect(() => {
    setIsMounted(true);
    const price = items.flatMap((item) => item.price.split(", ")); // Dividir a string e aplanar a lista de chaves
    setAllPrice(price);
    return () => setIsMounted(false);
  }, [items]);

  useEffect(() => {
    setIsMounted(true);
    const plano = items.flatMap((item) => item.size.name.split(", ")); // Dividir a string e aplanar a lista de chaves
    setAllPlano(plano);
    return () => setIsMounted(false);
  }, [items]);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const discordWebhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_DISCORD as string;

  const sendKeyToDiscord = async (randomSizeKey: string) => {
    try {
      await axios.post(discordWebhookUrl, {
        content: `✅ Seu produto "${allProduct.join(', ')}" acaba de ser vendido por R$ ${allPrice.join(', ')} e uma key ${allPlano.join(', ')} (${randomSizeKey}) foi entregue com sucesso!\n Mensagem de ${process.env.NEXT_PUBLIC_NOME_LOJA} - ${process.env.NEXT_PUBLIC_SITE_LOJA}`
      });
      console.log("Mensagem enviada para o Discord com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar mensagem para o Discord:", error);
    }
  };

  const checkAndAddKey = async (randomSizeKey: string) => {
    try {
      const getContentResponse = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, { headers });
      const content = atob(getContentResponse.data.content);

      if (!content.includes(randomSizeKey)) {
        const updatedContent = btoa(content + `\n${randomSizeKey}`);
        await axios.put(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
          message: `Adicionando nova chave ${randomSizeKey}`,
          content: updatedContent,
          sha: getContentResponse.data.sha
        }, { headers });

        toast.success(`Obrigado por adquirir nosso produto. Salve de forma segura sua Key: ${randomSizeKey}\n ${allNames.join(', ')}: ${allLinks.join(', ')}`, { duration: 3600000 });

        // Enviar a chave para o Discord
        await sendKeyToDiscord(randomSizeKey);

        return true; // Chave adicionada com sucesso
      } else {
        return false; // Chave já existe
      }
    } catch (error) {
      console.error('Erro ao verificar/adicionar chave:', error);
      toast.error('Erro ao processar sua solicitação. Tente novamente.');
      return false; // Erro ao processar a solicitação
    }
  };

const sendMessageToDiscord = async (message: string) => {
  try {
    await axios.post(discordWebhookUrl, {
      content: message
    });
    console.log("Mensagem enviada para o Discord com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar mensagem para o Discord:", error);
  }
};

  useEffect(() => {
    const processKey = async () => {
      if (isMounted && !isMessageShown && searchParams.get('success')) {
        const keys = items.flatMap((item) => item.size.value.split(", "));
        let keyAddedSuccessfully = false;
  
        for (const key of keys) {
          const isUnique = await checkAndAddKey(key.trim());
          if (isUnique) {
            keyAddedSuccessfully = true;
            break; // Chave foi única e adicionada, parar o loop
          }
        }
  
        if (!keyAddedSuccessfully) {
          // Se nenhuma chave foi adicionada com sucesso, assumimos que todas as chaves estão esgotadas
          const user = `Estoque esgotado, fale com suporte usando este ID: 0828\n ${allNames.join(', ')}: ${allLinks.join(', ')}`;
          const support = `⚠️ Seu estoque acabou de esgotar, faça uma reposição imediatamente!\n  Mensagem de ${process.env.NEXT_PUBLIC_NOME_LOJA} - ${process.env.NEXT_PUBLIC_SITE_LOJA}`
          toast.error(user, { duration: 3600000 });
  
          // Enviar a notificação de estoque esgotado para o Discord
          await sendMessageToDiscord(support);
        }
  
        setMessageShown(true);
      }
    };
  
    processKey();
  }, [items, isMounted, isMessageShown, searchParams]);

  const totalPrice = items.reduce((total, item) => total + Number(item.price), 0);

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item.id),
      stripeApiKey: process.env.NEXT_PUBLIC_API_STRIPE, // Corrigido
      siteLoja: process.env.NEXT_PUBLIC_SITE_LOJA
    });

    window.location.href = response.data.url;
};

  return ( 
    <div
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 className="text-lg font-medium text-purple-600">
        Resumo do pedido
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-purple-200 pt-4">
          <div className="text-base font-medium text-purple-600">Total de pedidos</div>
          <div className="text-purple-600">
            <Currency value={totalPrice} />
         </div>
        </div>
      </div>
      <Button onClick={onCheckout} disabled={items.length === 0} className="w-full mt-6">
        Finalizar Compra
      </Button>
    </div>
  );
}
 
export default Summary;
