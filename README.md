<h1 align="center">Source da sua Loja de Cheats</h1>

<div align="center">
  <strong><img src="https://skillicons.dev/icons?i=nodejs" width="48"> <img src="https://skillicons.dev/icons?i=tailwind" width="48"> <img src="https://skillicons.dev/icons?i=react" width="48"></strong>
</div>
<div align="center">
  Um projeto incrível com NodeJS, tailwind e React!
</div>

## 🛠️ Pré-requisitos

Antes de começar, certifique-se de que você tenha acesso as seguintes plataformas e NodeJS instalado em sua máquina:

- Conta Stripe 🏦
- Conta Vercel <img src="https://skillicons.dev/icons?i=vercel" width="15">
- NodeJs (somente se for testar em localhost) <img src="https://skillicons.dev/icons?i=nodejs" width="15">

## 🚀 Passo a passo para rodar sua loja em localhost

Siga os passos abaixo para iniciar o projeto em seu ambiente local:

1️⃣ **Clone o repositório** <img src="https://skillicons.dev/icons?i=git" width="15"> 

   Clique no botão "Clone" acima ou execute o seguinte comando no terminal:

   ```bash
   git clone https://github.com/the-rubicheats/LojaSRC_VendaCheats.git
   ```

   Isso criará uma cópia local do repositório em seu ambiente.

2️⃣ **Crie um .env na raiz do seu projeto e adicione:** 

   ```bash
   #Seu arquivo .env
###
NEXT_PUBLIC_NOME_LOJA=VendaCheats
NEXT_PUBLIC_SITE_LOJA=http://localhost:3000
NEXT_PUBLIC_WEBHOOK_DISCORD=https://discord.com/api/webhooks/1333642693591531701/3KkMOqXAws4gc4rHxuygaOE45TUTq5rxvfvQU-  sFG73IKornZyYXWBY14-jzfpHFHN2X
NEXT_PUBLIC_API_STRIPE=sk_test_615Ee4oFnSspoNlV6pLk4ApWAE7sJLEhhpHRnBTBRrr2JPmgrNlwqkceTpx366b7LHFsHSIXZHb2UE3OWMbHXd6Y100zmsIyaOc
NEXT_PUBLIC_API_URL=https://gratuito.vendacheats.com/api/b0b6e3c4-2dc10-419c-8f08-80cf0f473105
###
   ```
## ⚠️ Atenção
- Lembre de não compartilhar com ninguém
- Adicionar qualquer espaçamento
- Esquecer do http ou https em NEXT_PUBLIC_SITE_LOJA

## 📜 Descrição do .env
- NEXT_PUBLIC_NOME_LOJA = nome da sua loja
- NEXT_PUBLIC_SITE_LOJA= = url do seu site
- NEXT_PUBLIC_WEBHOOK_DISCORD = api do seu bot do discord (encontrada no portal dos devs)
- NEXT_PUBLIC_API_STRIPE = api da sua conta stripe (encontrada no dashboard)
- NEXT_PUBLIC_API_URL = api da conta vendacheats (encontrada na aba config)

3️⃣ **Modifique oque desejar na sua loja e execute:**

   ```bash
   npm i
   npm run dev
   ```

4️⃣ **Realizando o deploy na Vercel**

 Antes de fazer um deploy é necessario publicar suas modificações em um repositório remoto no GitHub, siga estes passos:

   1️⃣ Crie um novo repositório vazio no GitHub. No terminal do bash ou vscode, navegue até o diretório raiz do source da sua loja.
   
   2️⃣ Execute os seguintes comandos:

   ```bash
   git remote set-url origin https://github.com/seu-usuario/nome-do-novo-repositorio.git
   git add .
   git commit -m "Adicionar Upadate da Loja"
   git push -u origin master
   ```
- Isso configurará o repositório remoto e enviará suas modificações para lá.
   
  3️⃣ Adicione um novo projeto a Vercel, importe o repositório com sua loja, em 'Environment Variables' cole seu .env e clique em Fazer Deploy

- Para configurar um dominio customizado, basta ir em settings e adicionar um DNS.
