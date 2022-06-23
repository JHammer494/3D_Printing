/*
  Warnings:

  - You are about to drop the column `volumn` on the `Size` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_image_id_fkey";

-- AlterTable
ALTER TABLE "Material" ALTER COLUMN "type" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "image_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Size" DROP COLUMN "volumn",
ADD COLUMN     "volume" DOUBLE PRECISION;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
