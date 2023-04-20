-- CreateTable
CREATE TABLE "Agents" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "real_name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "Country" TEXT NOT NULL,

    CONSTRAINT "Agents_pkey" PRIMARY KEY ("id")
);
