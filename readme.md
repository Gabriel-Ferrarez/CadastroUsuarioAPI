# CadastroUsuarioAPI

**CadastroUsuarioAPI** é um sistema de cadastro de usuários com front-end desenvolvido em React e back-end em Node.js, utilizando MongoDB como banco de dados e Prisma como ORM (Object-Relational Mapping).

## Estrutura do Projeto

A estrutura do projeto é organizada em duas partes principais:

- **Frontend**: Aplicação desenvolvida em React, localizada na pasta `frontend/cadastro`.
- **Backend**: API construída em Node.js, localizada na pasta `backend/API`, que utiliza MongoDB para armazenamento e Prisma como ORM.

## Tecnologias Utilizadas

### Frontend (React)
- React
- JavaScript (ou TypeScript, se aplicável)
- CSS (ou frameworks como Bootstrap, Tailwind, etc.)
- Axios (para comunicação com a API)
- React Router (se aplicável)

### Backend (Node.js)
- Node.js
- Express (framework para API)
- MongoDB (banco de dados)
- Prisma (ORM para gerenciar MongoDB)
- JWT (JsonWebToken, para autenticação, se aplicável)
- Dotenv (para gerenciar variáveis de ambiente)
- **Thunder Client** (para testes de API)

## Instalação

### Requisitos:
- Node.js (v14 ou superior)
- MongoDB (local ou remoto)
- NPM (ou Yarn)
- Extensão **Thunder Client** (para testes de API no VS Code)

### Passo a Passo:

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/CadastroUsuarioAPI.git

2. Frontend: Navegue até a pasta do front-end e instale as dependências:
    ```
    cd frontend/cadastro
    npm install
   
3. Backend: Navegue até a pasta do back-end e instale as dependências:
    ```
    cd ../../backend/API
    npm install


4. Configuração do Banco de Dados: Certifique-se de que o MongoDB esteja rodando localmente ou tenha uma conexão remota. Configure as variáveis de ambiente no arquivo .env (exemplo abaixo).

 Configuração de Variáveis de Ambiente
 Crie um arquivo .env nas pastas frontend/cadastro e backend/API com as seguintes configurações:

# Backend .env (exemplo):
    
    `DATABASE_URL=mongodb://localhost:27017/nome-do-banco
     JWT_SECRET=sua_chave_secreta
     PORT=3000`


# Frontend .env (exemplo):

   `REACT_APP_API_URL=http://localhost:3000`


# Executando o Projeto

1. Iniciar o Back-end: Navegue até a pasta backend/API e inicie o servidor:
    
    `npm start`

   O servidor estará disponível em http://localhost:3000.


 2. Iniciar o Front-end: Navegue até a pasta frontend/cadastro e inicie o front-end:
    `npm start`

   O front-end estará disponível em http://localhost:3000.

3. Testar a API com Thunder Client: Use a extensão Thunder Client no VS Code para testar os endpoints da API. Após iniciar o servidor, você pode enviar requisições para http://localhost:3000 e testar funcionalidades como o cadastro e a deleção de usuários.

## Funcionalidades
 - Cadastro de Usuários: O sistema permite cadastrar novos usuários, armazenando os dados no MongoDB via a API.
 - Deleção de Usuários: É possível deletar usuários diretamente na interface, com as alterações refletidas no banco de dados.
 - Consumo da API: A aplicação React consome os dados da API para exibir e gerenciar os usuários cadastrados.
 - Autenticação (opcional): A API pode incluir autenticação com JWT (se configurado).

 ## Melhorias Futuras
 - Implementar autenticação de usuários (login/logout) usando JWT.
 - Adicionar validações de formulário no front-end.
 - Melhorar o design da interface com frameworks como Material-UI ou Bootstrap.
 - Adicionar testes unitários e de integração.

 ## Contribuição
 - Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.







