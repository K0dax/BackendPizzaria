# Backend Pizzaria

Backend de um projeto de gerenciamento de pedidos e mesas de uma pizzaria.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Esses são os softwares necessários, certifique-se de estar com eles instalados em sua máquina:

* [Nodejs](https://nodejs.org/en/download/) - Ambiente de execução.
* [Postgres](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) - Banco de dados utilizado no projeto.
* [Insomnia](https://insomnia.rest/download) - API Client que utilizei.

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

Instalar as dependências:

```yarn
yarn install
```

Rodar a aplicação na porta 3000:

```yarn
yarn dev
```

## ⚙️ Endpoints

### 🔩 Criação de usuário
* POST http://localhost:3000/users

#### Request

```http application/json
{
  "name": "lucius",
  "password": "passowrdTeste",
  "email": "lucius@teste.com"
}
```
#### Response

```http application/json
{
  "id": "28be60b9-b9ba-41f1-b264-3e1e94ba67ac",
  "name": "lucius",
  "email": "lucius@teste.com"
}
```

## 🛠️ Construído com

* Typescript
* Nodejs
* Postgres
* BcryptJs

## ✒️ Autores

* [Yan "K0da" Carlos](https://github.com/K0dax) - *Trabalho Integral*

## Agradecimentos

* Agradecer a mim mesmo por não desistir e não me deixar abalar independente das circunstâncias.
