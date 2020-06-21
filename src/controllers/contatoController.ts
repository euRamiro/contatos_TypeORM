import { Router } from "express";
import { getRepository, getCustomRepository } from "typeorm";
import Contato from "../models/Contato";
import ContatoRepository from "../repositories/ContatoRepository";

const contatoController = Router();

contatoController.post("/", async (resquest, response) => {
  try {
    const repository = getRepository(Contato);
    const res = await repository.save(resquest.body);
    return response.status(201).json(res);
  } catch (error) {
    console.log("erro postContatoController: ", error.message);
  }
});

contatoController.get("/", async (request, response) => {
  try {
    const repository = getRepository(Contato);
    const res = await repository.find();
    return response.status(201).json(res);
  } catch (error) {
    console.log("erro getContatoController: ", error.message);
  }
});

contatoController.get("/:name", async (request, response) => {
  try {
    const repository = getCustomRepository(ContatoRepository);
    const res = await repository.findByNome(request.params.name);
    return response.status(200).json(res);
  } catch (error) {
    console.log("erro getContatoControllerParam", error.message);
  }
});

export default contatoController;
