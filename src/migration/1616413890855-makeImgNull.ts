import {MigrationInterface, QueryRunner} from "typeorm";

export class makeImgNull1616413890855 implements MigrationInterface {
    name = 'makeImgNull1616413890855'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "url" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."url" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "product"."url" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "url" SET NOT NULL`);
    }

}
