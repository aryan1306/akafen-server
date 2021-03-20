/*
  Warnings:

  - You are about to drop the column `minPrice` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `maxPrice` on the `Product` table. All the data in the column will be lost.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "minPrice",
DROP COLUMN "maxPrice",
ADD COLUMN     "price" INTEGER NOT NULL;
