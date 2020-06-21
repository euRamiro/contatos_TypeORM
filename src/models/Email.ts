import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { IsEmail, MinLength, MaxLength } from "class-validator";

import Contato from "./Contato";

@Entity("email")
export default class Email {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  @IsEmail({}, { message: "email não é válido." })
  email: string;
  @Column()
  @MinLength(3, { message: "mínimo de três caracteres." })
  @MaxLength(100, { message: "máximo de cem caracteres." })
  descricao: string;
  @Column()
  status: boolean;
  @CreateDateColumn({ name: "created_At" })
  createdAt: Date;

  @OneToMany((type) => Contato, (emails) => Email)
  contato: Contato;
}
