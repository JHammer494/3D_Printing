-- CreateTable
CREATE TABLE "Plate" (
    "id" SERIAL NOT NULL,
    "printer" TEXT NOT NULL,

    CONSTRAINT "Plate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Size" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "plate_size" INTEGER NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "sizeID" INTEGER NOT NULL,
    "print" TIMESTAMP(3) NOT NULL,
    "file_id" INTEGER NOT NULL,
    "image" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "meta_terms" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_title_key" ON "Product"("title");

-- AddForeignKey
ALTER TABLE "Size" ADD CONSTRAINT "Size_plate_size_fkey" FOREIGN KEY ("plate_size") REFERENCES "Plate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_image_fkey" FOREIGN KEY ("image") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_sizeID_fkey" FOREIGN KEY ("sizeID") REFERENCES "Size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
