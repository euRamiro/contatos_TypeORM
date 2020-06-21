import { Router } from "express";

import contatoController from "./controllers/contatoController";
import emailController from "./controllers/emailController";

const routes = Router();

routes.use("/contato", contatoController);
routes.use("/email", emailController);

export default routes;
