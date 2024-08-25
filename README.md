# Task Management API

Esta é uma API para gerenciamento de tarefas, construída com Express e Prisma. A API oferece endpoints para criar, listar, atualizar e excluir tarefas.

## Endpoints

### Criar Tarefa
- **Endpoint:** `POST /tasks`
- **Descrição:** Cria uma nova tarefa.
- **Corpo da Requisição:**
  ```json
  {
	"sucesso": true,
	"message": "Tarefas criada com sucesso!",
	"task": {
		"id": 1,
		"uuid": "c807c72c-6e2b-4fa4-a221-16c8a6f13313",
		"titulo": "Titulo da tarefa",
		"descricao": "Alguma descrição",
		"createdAt": "2024-08-25T00:09:44.946Z",
		"updatedAt": "2024-08-25T00:09:44.946Z"
  }


### Obter Tarefa
- **Endpoint:** `GET /tasks`
- **Descrição:** Coleta as tarefas criadas.
- **Corpo da Requisição:**
  ```json
  {
	"sucesso": true,
	"message": "Tarefas encontradas com sucesso!",
	"task": {
		"id": 1,
		"uuid": "c807c72c-6e2b-4fa4-a221-16c8a6f13313",
		"titulo": "Titulo da tarefa",
		"descricao": "Alguma descrição",
		"createdAt": "2024-08-25T00:09:44.946Z",
		"updatedAt": "2024-08-25T00:09:44.946Z"
  }
    {
	"sucesso": true,
	"message": "Tarefas encontradas com sucesso!",
	"task": {
		"id": 2,
		"uuid": "c345c72c-6e2b-4fa4-a221-16c8dfrt13313",
		"titulo": "Titulo da tarefa",
		"descricao": "Alguma descrição",
		"createdAt": "2024-08-25T00:09:44.946Z",
		"updatedAt": "2024-08-25T00:09:44.946Z"
  }


### Obter Tarefa Pelo ID
- **Endpoint:** `GET /tasks/:id`
- **Descrição:** Coleta as tarefas criadas.
- **Corpo da Requisição:**
  ```json
  {
	"sucesso": true,
	"message": "Tarefa encontrada com sucesso!",
	"task": {
		"id": 1,
		"uuid": "c807c72c-6e2b-4fa4-a221-16c8a6f13313",
		"titulo": "Titulo da tarefa",
		"descricao": "Alguma descrição",
		"createdAt": "2024-08-25T00:09:44.946Z",
		"updatedAt": "2024-08-25T00:09:44.946Z"
    }



### Editar a Tarefa
- **Endpoint:** `PUT /tasks/:id`
- **Descrição:** Edita a tarefa com base no id
- **Corpo da Requisição:**
  ```json
  {
	"sucesso": true,
	"message": "Tarefa editada com sucesso!",
	"task": {
		"id": 1,
		"uuid": "c807c72c-6e2b-4fa4-a221-16c8a6f13313",
		"titulo": "Titulo da tarefa 2",
		"descricao": "Alguma descrição 2",
		"createdAt": "2024-08-25T00:09:44.946Z",
		"updatedAt": "2024-08-25T00:09:44.946Z"
    }


### Deleta a Tarefa Pelo ID
- **Endpoint:** `GET /tasks/:id`
- **Descrição:** Deleta a tarefa criada.
- **Corpo da Requisição:**
  ```json
  {
	"sucesso": true,
	"message": "Tarefa deletada com sucesso!",
	"deleteTask": {
		"id": 1,
		"uuid": "c807c72c-6e2b-4fa4-a221-16c8a6f13313",
		"titulo": "Titulo da tarefa 2",
		"descricao": "Alguma descrição 2",
		"createdAt": "2024-08-25T00:09:44.946Z",
		"updatedAt": "2024-08-25T00:09:44.946Z"
    }

## Dependências

`@prisma/client`: ^5.17.0

`dotenv`: ^16.4.5

`express`: ^4.19.2

## DevDependencies

`nodemon`: ^3.1.4

`prisma`: ^5.17.0
## Instalação

Clone o repositório e navegue para o diretório do projeto.

### Instale as dependências
```bash
    npm install
```


### Configure suas variáveis de ambiente no arquivo `.env`
```bash
    DATABASE_URL="sua-url-do-banco-de-dados"

    PORT="7777"
```
### Execute as migrações do Prisma:

```bash
    npx prisma migrate dev

```

### Inicie o servidor:
```bash
    yarn dev

```

## Licença



Distribuído sob a licença MIT. Veja LICENSE para mais informações.

[MIT](https://choosealicense.com/licenses/mit/)

Esse README fornece uma visão geral dos endpoints da API, como configurar o projeto e como executá-lo em desenvolvimento. Sinta-se à vontade para ajustar as informações conforme necessário.
