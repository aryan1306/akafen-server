/*
  Warnings:

  - Added the required column `brandName` to the `Vendor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vendor" ADD COLUMN     "brandName" TEXT NOT NULL;