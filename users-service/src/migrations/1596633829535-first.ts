import {MigrationInterface, QueryRunner} from "typeorm";

export class first1596633829535 implements MigrationInterface {
    name = 'first1596633829535'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "fullName" character varying NOT NULL, "password" integer NOT NULL, "email" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "avatarUrl" character varying NOT NULL, "dateOfBirth" character varying NOT NULL, "adress" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
