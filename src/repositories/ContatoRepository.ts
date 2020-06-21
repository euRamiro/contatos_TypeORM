import { EntityRepository, Repository } from "typeorm";
import Contato from "../models/Contato";

@EntityRepository(Contato)
export default class ContatoRepository extends Repository<Contato> {
  public async findByNome(nome: string): Promise<Contato[]> {
    return this.find({
      where: {
        nome,
      },
    });
  }
}
