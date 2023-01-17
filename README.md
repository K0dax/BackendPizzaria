# Backend Pizzaria

Backend de um projeto de gerenciamento de pedidos e mesas de uma pizzaria.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Esses são os softwares necessários, certifique-se de estar com eles instalados em sua máquina:

- [Nodejs](https://nodejs.org/en/download/) - Ambiente de execução.
- [Postgres](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) - Banco de dados utilizado no projeto.
- [Insomnia](https://insomnia.rest/download) - API Client que utilizei.

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

Instalar as dependências:

```yarn
yarn install
```

Crie um arquivo .env na raiz com as seguintes chaves:

```<code>
DATABASE_URL="postgresql://[user]:[senha]@localhost:[portaDoDB]/[nomeDoDB]?schema=public"
SECRET_JWT="[senhaDeSuaEscolha]"
```

Use o comando a seguir para importar os schemas para o seu DB:

```yarn
yarn prisma migrate dev
```

Rodar a aplicação na porta 3000:

```yarn
yarn dev
```

## ⚙️ Endpoints

### 🔩 Criação de usuário

#### POST http://localhost:3000/users

- Request

```http application/json
{
  "name": "lucius",
  "password": "passowrdTeste",
  "email": "lucius@teste.com"
}
```

- Response

```http application/json
{
  "id": "28be60b9-b9ba-41f1-b264-3e1e94ba67ac",
  "name": "lucius",
  "email": "lucius@teste.com"
}
```

### 🔩 Login

#### POST http://localhost:3000/session

- Request

```http application/json
{
  "email": "lucius@teste.com",
  "password": "passowrdTeste"
}
```

- Response

```http application/json
{
  "id": "28be60b9-b9ba-41f1-b264-3e1e94ba67ac",
  "name": "lucius",
  "email": "lucius@teste.com",
  "token":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW5hIiwiZW1haWwiOiJhbmFAYS5jb20iLCJpYXQiOjE2NzM1NTE5MjIsImV4cCI6MTY3NjE0MzkyMiwic3ViIjoiMjhiZTYwYjktYjliYS00MWYxLWIyNjQtM2UxZTk0YmE2N2FjIn0.upUoNYqMaynE1FV4Yk2kA-jGg9d-Zlvoqlva-F4S4js"
}
```

### 🔩 Detalhes do Usuário

#### GET http://localhost:3000/me

<br>

- Headers

```headers
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW5hIiwiZW1haWwiOiJhbmFAYS5jb20iLCJpYXQiOjE2NzM1NTE5MjIsImV4cCI6MTY3NjE0MzkyMiwic3ViIjoiMjhiZTYwYjktYjliYS00MWYxLWIyNjQtM2UxZTk0YmE2N2FjIn0.upUoNYqMaynE1FV4Yk2kA-jGg9d-Zlvoqlva-F4S4js
```

- Response

```http application/json
{
  "id": "28be60b9-b9ba-41f1-b264-3e1e94ba67ac",
  "name": "lucius",
  "email": "lucius@teste.com"
}
```

### 🔩 Criar categoria

#### POST http://localhost:3000/category

<br>

- Headers

```headers
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW5hIiwiZW1haWwiOiJhbmFAYS5jb20iLCJpYXQiOjE2NzM1NTE5MjIsImV4cCI6MTY3NjE0MzkyMiwic3ViIjoiMjhiZTYwYjktYjliYS00MWYxLWIyNjQtM2UxZTk0YmE2N2FjIn0.upUoNYqMaynE1FV4Yk2kA-jGg9d-Zlvoqlva-F4S4js
```

- Request

```application/json
{
  "name": "categoria teste"
}
```

- Response

```application/json
{
	"id": "0a0a5976-bbd7-4cad-98f4-f9c6ec523068",
	"name": "categoria teste"
}
```

### 🔩 Listar categorias

#### GET http://localhost:3000/category

<br>

- Headers

```headers
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW5hIiwiZW1haWwiOiJhbmFAYS5jb20iLCJpYXQiOjE2NzM1NTE5MjIsImV4cCI6MTY3NjE0MzkyMiwic3ViIjoiMjhiZTYwYjktYjliYS00MWYxLWIyNjQtM2UxZTk0YmE2N2FjIn0.upUoNYqMaynE1FV4Yk2kA-jGg9d-Zlvoqlva-F4S4js
```

- Response

```application/json
[
	{
		"id": "6aecf2e6-fe04-45f6-8d81-8299dd8506f5",
		"name": "categoria teste"
	},
	{
		"id": "0a0a5976-bbd7-4cad-98f4-f9c6ec523068",
		"name": "categoria 2"
	}
]
```

### 🔩 Criar produtos

#### POST http://localhost:3000/product

<br>

- Headers

```headers
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW5hIiwiZW1haWwiOiJhbmFAYS5jb20iLCJpYXQiOjE2NzM1NTE5MjIsImV4cCI6MTY3NjE0MzkyMiwic3ViIjoiMjhiZTYwYjktYjliYS00MWYxLWIyNjQtM2UxZTk0YmE2N2FjIn0.upUoNYqMaynE1FV4Yk2kA-jGg9d-Zlvoqlva-F4S4js
```

- Request

```multipart/form-data
{
	"name": "teste",
	"price": "35",
	"description": "estou testando",
	"file": "algumaimg.jpg",
	"category_id": "6aecf2e6-fe04-45f6-8d81-8299dd8506f5"
}
```

- Response

```application/json
{
	"id": "4a12f0bd-04c1-480f-9bfb-1e4623171287",
	"name": "teste",
	"price": "35",
	"description": "estou testando",
	"banner": "e7961f3adbb97432a302ae3bf5fbe27e-algumaimg.jpg",
	"created_at": "2023-01-17T19:02:41.375Z",
	"updated_at": "2023-01-17T19:02:41.375Z",
	"category_id": "6aecf2e6-fe04-45f6-8d81-8299dd8506f5"
}
```

### 🔩 Listar produtos pela categoria

<br>

#### GET http://localhost:3000/category/product?category_id=:id

<br>

- Headers

```headers
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW5hIiwiZW1haWwiOiJhbmFAYS5jb20iLCJpYXQiOjE2NzM1NTE5MjIsImV4cCI6MTY3NjE0MzkyMiwic3ViIjoiMjhiZTYwYjktYjliYS00MWYxLWIyNjQtM2UxZTk0YmE2N2FjIn0.upUoNYqMaynE1FV4Yk2kA-jGg9d-Zlvoqlva-F4S4js
```

- Exemplo:

```application/json
http://localhost:3000/category/product?category_id=6aecf2e6-fe04-45f6-8d81-8299dd8506f5
```

- Response

```application/json
[
  {
    "id": "4a12f0bd-04c1-480f-9bfb-1e4623171287",
    "name": "teste",
    "price": "35",
    "description": "estou testando",
    "banner": "e7961f3adbb97432a302ae3bf5fbe27e-algumaimg.jpg",
    "created_at": "2023-01-17T19:02:41.375Z",
    "updated_at": "2023-01-17T19:02:41.375Z",
    "category_id": "6aecf2e6-fe04-45f6-8d81-8299dd8506f5"
  }
]
```

## 🛠️ Construído com

- Typescript
- Nodejs
- Postgres
- BcryptJs
- JWT (JsonWebToken)

## ✒️ Autores

- [Yan "K0da" Carlos](https://github.com/K0dax) - _Trabalho Integral_

## Agradecimentos

- Agradecer a mim mesmo por não desistir e não me deixar abalar independente das circunstâncias.
