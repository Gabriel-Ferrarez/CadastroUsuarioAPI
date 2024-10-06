import express, { query, request, response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express()
app.use(express.json())
app.use(cors())

app.post("/users", async (request, response) => {
  await prisma.user.create({
    data: {
      email: request.body.email,
      name: request.body.name,
      age: request.body.age,
    },
  });

  response.status(201).json(request.body);
});

app.get("/users", async (request, response) => {
  let user = [];

  if (request.query) {
    user = await prisma.user.findMany({
      where: {
        name: request.query.name,
        email: request.query.email,
        age: request.query.age,
      },
    });
  } else {
    user = await prisma.user.findMany();
  }

  response.status(200).json(user);
});

app.put("/users/:id", async (request, response) => {
  await prisma.user.update({
    where: {
      id: request.params.id,
    },
    data: {
      email: request.body.email,
      name: request.body.name,
      age: request.body.age,
    },
  });

  response.status(201).json(request.body);
});

app.delete("/users/:id", async (request, response) => {
  await prisma.user.delete({
    where: {
      id: request.params.id,
    },
  });

  response.status(200).json({ message: "Usuário deletado com sucesso!" });
});

app.listen(3000);

/* 

Criar nossa API de Usuários

-Criar usuários
-listar todos os usuários 
-Editar um usuário
-Deletar um usuário


gabrielferrarez
PVpqDviaYMfOOSkn

*/
