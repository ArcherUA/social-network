import {MigrationInterface, QueryRunner} from "typeorm";

export class Third1596635178341 implements MigrationInterface {
    name = 'Third1596635178341'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "avatarId" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatarId"`);
    }

}
