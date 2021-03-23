import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1616357669684 implements MigrationInterface {
    name = 'Initial1616357669684'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vendor" ("id" character varying NOT NULL, "email" character varying NOT NULL, "city" character varying NOT NULL, "password" character varying NOT NULL, "isVerified" boolean NOT NULL DEFAULT false, "hasPaid" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "brandName" character varying NOT NULL, "mobile" character varying NOT NULL, "website" character varying, "facebook" character varying, "whatsapp" character varying NOT NULL, "instaURL" character varying, CONSTRAINT "UQ_aba8090534d8b8b8845784086c3" UNIQUE ("email"), CONSTRAINT "UQ_bca1f65fe9a33663740b8965212" UNIQUE ("mobile"), CONSTRAINT "PK_931a23f6231a57604f5a0e32780" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "category" character varying NOT NULL, "price" integer NOT NULL, "url" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "vendorId" character varying NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isVerified" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_921582066aa70b502e78ea92012" FOREIGN KEY ("vendorId") REFERENCES "vendor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_921582066aa70b502e78ea92012"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "vendor"`);
    }

}
