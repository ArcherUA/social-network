import {MigrationInterface, QueryRunner} from "typeorm";

export class avatars1596636166874 implements MigrationInterface {
    name = 'avatars1596636166874'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avatar" ADD "userId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "avatar" ADD CONSTRAINT "FK_b6abb9e4579bb7fca4d823a5e66" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "avatar" DROP CONSTRAINT "FK_b6abb9e4579bb7fca4d823a5e66"`);
        await queryRunner.query(`ALTER TABLE "avatar" DROP COLUMN "userId"`);
    }

}
