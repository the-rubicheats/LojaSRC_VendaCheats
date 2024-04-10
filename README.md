<h1 align="center">Source da sua Loja</h1>

<div align="center">
  <strong><img src="https://skillicons.dev/icons?i=vscode" width="48"></strong>
</div>
<div align="center">
  Um projeto incrível com NodeJS, tailwind e React!
</div>

## 🛠️ Pré-requisitos

Antes de começar, certifique-se de que você tenha as seguintes ferramentas instaladas em sua máquina:

- Conta Stripe 🏦
- Conta Vercel 
- NodeJs (somente se for testar em localhost) 🖥

## 🚀 Passo a passo para rodar sua loja em localhost

Siga os passos abaixo para iniciar o projeto em seu ambiente local:

1️⃣ **Clone o repositório** <img src="https://skillicons.dev/icons?i=git" width="15"> 

   Clique no botão "Clone" acima ou execute o seguinte comando no terminal:

   ```bash
   git clone https://github.com/the-rubicheats/LojaSRC_VendaCheats.git
   ```

   Isso criará uma cópia local do repositório em seu ambiente.

   Crie um .env na raiz do seu projeto e adicione: 

   ```bash
   #Seu arquivo .env
###
NEXT_PUBLIC_NOME_LOJA=VendaCheats
NEXT_PUBLIC_SITE_LOJA=http://localhost:3001
NEXT_PUBLIC_WEBHOOK_DISCORD=https://discord.com/api/webhooks/1333642693591531701/3KkMOqXAws4gc4rHxuygaOE45TUTq5rxvfvQU-  sFG73IKornZyYXWBY14-jzfpHFHN2X
NEXT_PUBLIC_API_STRIPE=sk_test_615Ee4oFnSspoNlV6pLk4ApWAE7sJLEhhpHRnBTBRrr2JPmgrNlwqkceTpx366b7LHFsHSIXZHb2UE3OWMbHXd6Y100zmsIyaOc
NEXT_PUBLIC_API_URL=http://localhost:3000/api/b0b6e3c4-2dc10-419c-8f08-80cf0f473105
###
   ```

   Modifique oque desejar na sua loja e execute:

   ```bash
   npm i
   npm run dev
   ```

2️⃣ **Realize o deploy na Vercel**

 Antes de fazer um deploy é necessario publicar suas modificações em um repositório remoto no GitHub, siga estes passos:

   1️⃣ Crie um novo repositório vazio no GitHub.
   2️⃣ No terminal do vscode, navegue até o diretório raiz do source da sua loja.
   3️⃣ Execute os seguintes comandos:

   ```bash
   git remote set-url origin https://github.com/seu-usuario/nome-do-novo-repositorio.git
   git add .
   git commit -m "Adicionar Upadate da Loja"
   git push -u origin master
   ```

   Isso configurará o repositório remoto e enviará suas modificações para lá.
   
   Adicione um novo projeto a Vercel e importe o repositório com sua loja, em 'Environment Variables' cole seu .env e clique em Fazer Deploy

   ```bash
   #Seu arquivo .env
###
NEXT_PUBLIC_NOME_LOJA=VendaCheats
NEXT_PUBLIC_SITE_LOJA=http://localhost:3001
NEXT_PUBLIC_WEBHOOK_DISCORD=https://discord.com/api/webhooks/1333642693591531701/3KkMOqXAws4gc4rHxuygaOE45TUTq5rxvfvQU-  sFG73IKornZyYXWBY14-jzfpHFHN2X
NEXT_PUBLIC_API_STRIPE=sk_test_615Ee4oFnSspoNlV6pLk4ApWAE7sJLEhhpHRnBTBRrr2JPmgrNlwqkceTpx366b7LHFsHSIXZHb2UE3OWMbHXd6Y100zmsIyaOc
NEXT_PUBLIC_API_URL=http://localhost:3000/api/b0b6e3c4-2dc10-419c-8f08-80cf0f473105
###
   ```
   Lembre de não compartilhar com ninguém, adicionar qualquer espaçamento ou esquecer do http ou https em NEXT_PUBLIC_SITE_LOJA no arquivo .env

3️⃣ **Acesse a API REST Laravel**

   Após iniciar os contêineres, você pode acessar a API REST do Laravel através do seu navegador no endereço [http://localhost:8000](http://localhost:8000).

4️⃣ **Acesse o front-end React**

   Você também pode acessar o front-end React através do seu navegador no endereço [http://localhost:3000](http://localhost:3000).

5️⃣ **Modifique o projeto**

   Agora que você tem o projeto em execução, é possível fazer modificações no código conforme necessário. Sinta-se à vontade para explorar e adaptar o projeto de acordo com suas necessidades.

6️⃣ **Publique suas modificações**

   Se desejar publicar suas modificações em um repositório remoto no GitHub, siga estes passos:

   1️⃣ Crie um novo repositório vazio no GitHub.
   2️⃣ No terminal, navegue até o diretório raiz do projeto.
   3️⃣ Execute os seguintes comandos:

   ```bash
   git remote set-url origin https://github.com/seu-usuario/nome-do-novo-repositorio.git
   git add .
   git commit -m "Adicionar minhas modificações"
   git push -u origin master
   ```

   Isso configurará o repositório remoto e enviará suas modificações para lá.


<div align="center">
  Espero que este guia tenha sido útil e que você aproveite ao máximo o projeto utilizando Laravel, Docker e React. 🎉😄
</div>
