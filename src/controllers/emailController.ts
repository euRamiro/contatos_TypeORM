import { Router } from "express";
import { getRepository } from "typeorm";
import Email from "../models/Email";
import { validate } from "class-validator";

const emailController = Router();

emailController.post("/", async (request, response) => {
  try {
    const repository = getRepository(Email);
    const { email, descricao } = request.body;

    const novoCadastro = repository.create({
      email,
      descricao,
    });

    const erroValidacao = await validate(novoCadastro);

    if (erroValidacao.length === 0) {
      const res = await repository.save(request.body);
      return response.status(201).json(res);
    }
    return response.status(400).json(erroValidacao);
  } catch (error) {
    console.log("erro postControllerEmail", error.message);
  }
});

emailController.get("/", async (request, response) => {
  try {
    const repository = getRepository(Email);
    const res = await repository.find();
    return response.status(201).json(res);
  } catch (error) {
    console.log("erro getEmailController: ", error.message);
  }
});

export default emailController;
