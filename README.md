## Plataforma-Perguntas-Respostas com Node.JS 🚀

Olá seja bem vindo ao repositório do projeto Plataforma de perguntas.
Este projeto consiste em um sistema monolito na arquitetura MVC, pois 
toda sua estrutura tanto de back-end quanto de front-end constam no mesmo lugar.
Consiste em uma simples aplicação onde e possivel fazer perguntas e obter respostas.
Não e possivel fazer edição da pergunta ou resposta e nem deleta-las, pois 
não ha um sistema de login criado. A finalidade desta aplicação foi treinar
os conceitos de inserção e leitura de dados no banco de Dados utilizando um
ORM -Object Relational Mapper. Neste projeto utilizei o Sequelize.

## Estrutura
![estrutura do projeto](./public/imgs/01-estrutura.png)

`MVC` - MODEL, VIEWS e CONTROLLERS

1. MODEL: É responsável por toda interface com banco de dados, query's, conexão etc. e também responsável pelas regras de negócio.
2.  VIEWS: Se encontram todos os arquivos .HTML que renderizam as paginas e interface gráfica do sistema.
neste caso os arquivos são .ejs view engine utilizada.
3. CONTROLLERS: É responsável em ligar o model com as views, fazendo o meio de campo da arquitetura.
4. PUBLIC: Contém as imagens utilizadas no projeto, arquivos estáticos CSS e javaSript.
5. ROUTERS:  Possui as rotas da aplicação, sistema de rotas próprio do framework Express.

## tecnologias utilizadas

- Linguagens:
  - NodeJs
- Framework's:
  - Express
- Banco de dados:
  - Mysql
- ORM:
  - Sequelize
- Configurações
  - Dotenv
- View engine:
  - EJS
- Estilos:
  - Bootstrap
- Facilitador de desenvolvimento:
  - nodemon
- Organização e Padronização de codigo:
  - Eslint / config-airbnb-base

  ## Avisos

- Este projeto necessita do NodeJs instalado em seu computador e o banco de dados Mysql 
para rodar localmente.

- As demais dependêcias são instaladas com o comando npm install.

## Executando

Verifique o package.json, la se encontram scripts para execução do projeto.

- `"debug": "nodemon index.js", (npm run debug) inicia o projeto com nodemon.`
- `"start": "node index.js", (npm start) inicia o projeto com node.`

## Funcionalidades principais

