import {MigrationInterface, QueryRunner} from "typeorm";

export class changeUser1597061856308 implements MigrationInterface {
    name = 'changeUser1597061856308'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatarId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "avatarId" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatarId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "avatarId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" integer NOT NULL`);
    }

}
