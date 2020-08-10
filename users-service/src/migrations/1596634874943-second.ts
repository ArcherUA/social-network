import {MigrationInterface, QueryRunner} from "typeorm";

export class second1596634874943 implements MigrationInterface {
    name = 'second1596634874943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatarUrl"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "avatarUrl" character varying NOT NULL`);
    }

}
