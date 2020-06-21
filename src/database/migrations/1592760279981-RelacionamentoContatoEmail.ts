import {MigrationInterface, QueryRunner} from "typeorm";

export class RelacionamentoContatoEmail1592760279981 implements MigrationInterface {
    name = 'RelacionamentoContatoEmail1592760279981'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contato" ADD "emailsId" integer`);
        await queryRunner.query(`ALTER TABLE "email" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "contato" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "contato" ADD "nome" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contato" ADD CONSTRAINT "UQ_44d7ccac6a07ce215335a3ade8d" UNIQUE ("nome")`);
        await queryRunner.query(`ALTER TABLE "contato" ADD CONSTRAINT "FK_0e1c8baf9a533965146657ee49f" FOREIGN KEY ("emailsId") REFERENCES "email"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contato" DROP CONSTRAINT "FK_0e1c8baf9a533965146657ee49f"`);
        await queryRunner.query(`ALTER TABLE "contato" DROP CONSTRAINT "UQ_44d7ccac6a07ce215335a3ade8d"`);
        await queryRunner.query(`ALTER TABLE "contato" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "contato" ADD "nome" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "email" ALTER COLUMN "status" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "contato" DROP COLUMN "emailsId"`);
    }

}
