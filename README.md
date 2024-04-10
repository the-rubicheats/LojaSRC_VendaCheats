# Apresentando o Painel Administrativo RubiCheats para websites de cheats:
![Copy of Copy of Fullstack Twitter Clone (1)](https://cdn.discordapp.com/attachments/1202668266405892159/1214388408839839815/painelbyRubi.PNG?ex=65f8ee56&is=65e67956&hm=31de24fad2b07c102214eb00571f969a326f0b4fe517ab5eab6c468dc42bfa4e&)

Para uma demonstração, utilize os [Cartões de teste da Stripe](https://stripe.com/docs/testing)

Este é um repositório para um Painel Administrativo, desenvolvido pelo RubiCheats, especialmente projetado para websites de cheats.

[VIDEO TUTORIAL](https://youtu.be/LKY252UULTw?si=a8IUb1CKA2wmqaA)

## Principais Recursos:

- O painel administrativo serve tanto como CMS, Admin e API!
- Criação, atualização e exclusão de categorias!
- Criação, atualização e exclusão de produtos!
- Upload de várias imagens para produtos e alteração a qualquer momento!
- Criação, atualização e exclusão de filtros como "Cor" e "Tamanho", e correspondência no formulário de criação de "Produto".
- Criação, atualização e exclusão de "Banners", que são grandes textos no topo da página. Eles podem ser anexados a uma única categoria ou usados independentemente (Nosso Admin gera API para todos esses casos!)
- Pesquisa em todas as categorias, produtos, tamanhos, cores, painéis publicitários, com paginação incluída!
- Controle de produtos "destacados" para que apareçam na página inicial!
- Visualização de pedidos, vendas, etc.
- Gráficos de receita, etc.
- Autenticação do Clerk!
- Criação de Pedidos
- Finalização de compra da Stripe
- Webhooks da Stripe


### Pré-requisitos

**Node version 14.x**

### Clonando o Repositório

```shell
git clone [https://github.com/the-rubicheats/RubiPanel.git]
```

### Instalando Pacotes

```shell
npm i
```

### Configurando o arquivo .env


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Isso foi inserido pelo `prisma init`:
# As variáveis de ambiente declaradas neste arquivo são automaticamente disponibilizadas para o Prisma.
# Consulte a documentação para mais detalhes: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma suporta o formato de string de conexão nativa para PostgreSQL, MySQL, SQLite, SQL Server, MongoDB e CockroachDB.
# Consulte a documentação para todas as opções de string de conexão: https://pris.ly/d/connection-strings

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```

### Conectando-se ao Banco de Dados e Enviando o Prisma
```shell
npx prisma generate
npx prisma db push
```


### Iniciando o app

```shell
npm run dev
```

## Comandos Disponíveis

Executando comandos com npm `npm run [command]`

| command         | Descrição                                |
| :-------------- | :--------------------------------------- |
| `dev`           | Inicia uma instância do app              |
