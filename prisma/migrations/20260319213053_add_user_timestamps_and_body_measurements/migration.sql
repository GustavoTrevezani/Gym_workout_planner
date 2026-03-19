/*
  Warnings:

  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "BodyMeasurement" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "chest" DOUBLE PRECISION,
    "shoulders" DOUBLE PRECISION,
    "neck" DOUBLE PRECISION,
    "bicepsLeft" DOUBLE PRECISION,
    "bicepsRight" DOUBLE PRECISION,
    "tricepsLeft" DOUBLE PRECISION,
    "tricepsRight" DOUBLE PRECISION,
    "forearmLeft" DOUBLE PRECISION,
    "forearmRight" DOUBLE PRECISION,
    "abdomen" DOUBLE PRECISION,
    "waist" DOUBLE PRECISION,
    "glutes" DOUBLE PRECISION,
    "thighLeft" DOUBLE PRECISION,
    "thighRight" DOUBLE PRECISION,
    "calfLeft" DOUBLE PRECISION,
    "calfRight" DOUBLE PRECISION,
    "height" DOUBLE PRECISION,
    "weight" DOUBLE PRECISION,
    "bodyFatPercentage" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BodyMeasurement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BodyMeasurement" ADD CONSTRAINT "BodyMeasurement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
