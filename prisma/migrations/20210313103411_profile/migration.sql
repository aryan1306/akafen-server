/*
  Warnings:

  - You are about to drop the column `mobile` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `webURL` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `instaURL` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `facebook` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `whatsapp` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `brandName` on the `Vendor` table. All the data in the column will be lost.
  - Added the required column `city` to the `Vendor` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Vendor.mobile_unique";

-- AlterTable
ALTER TABLE "Vendor" DROP COLUMN "mobile",
DROP COLUMN "webURL",
DROP COLUMN "instaURL",
DROP COLUMN "facebook",
DROP COLUMN "whatsapp",
DROP COLUMN "brandName",
ADD COLUMN     "city" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "brandName" TEXT NOT NULL,
    "mobile" VARCHAR(10) NOT NULL,
    "website" TEXT NOT NULL,
    "isMobverified" BOOLEAN NOT NULL DEFAULT false,
    "instaURL" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "vendorId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile.mobile_unique" ON "Profile"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_vendorId_unique" ON "Profile"("vendorId");

-- AddForeignKey
ALTER TABLE "Profile" ADD FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
