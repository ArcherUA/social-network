import {MigrationInterface, QueryRunner} from "typeorm";

export class editAvatar1597062248941 implements MigrationInterface {
    name = 'editAvatar1597062248941'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "adress" TO "adres"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "adres" TO "adress"`);
    }

}
