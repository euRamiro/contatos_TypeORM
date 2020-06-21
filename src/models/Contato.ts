import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";

import Email from "./Email";

@Entity("contato")
export default class Contato {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({
    length: 100,
    unique: true,
  })
  nome: string;

  @CreateDateColumn({ name: "created_At" })
  createdAt: Date;
  @UpdateDateColumn({ name: "updated_At" })
  updatedAt: Date;

  @ManyToOne((type) => Email, (contato) => Contato, {
    onDelete: "CASCADE",
    eager: true,
  })
  emails: Email[];
}
