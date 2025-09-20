/*
  Warnings:

  - A unique constraint covering the columns `[licenseKeyHash]` on the table `purchases` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "purchases" ADD COLUMN     "activatedAt" TIMESTAMP(3),
ADD COLUMN     "activatedEmail" TEXT,
ADD COLUMN     "activationAttempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "licenseKey" TEXT,
ADD COLUMN     "licenseKeyHash" TEXT,
ADD COLUMN     "licenseStatus" TEXT NOT NULL DEFAULT 'inactive',
ADD COLUMN     "maxActivationAttempts" INTEGER NOT NULL DEFAULT 3,
ADD COLUMN     "processorId" TEXT,
ADD COLUMN     "systemFingerprint" TEXT;

-- CreateTable
CREATE TABLE "license_activations" (
    "id" TEXT NOT NULL,
    "purchaseId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "systemFingerprint" TEXT NOT NULL,
    "processorId" TEXT,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "status" TEXT NOT NULL,
    "errorMessage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "license_activations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "purchases_licenseKeyHash_key" ON "purchases"("licenseKeyHash");

-- AddForeignKey
ALTER TABLE "license_activations" ADD CONSTRAINT "license_activations_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "purchases"("id") ON DELETE CASCADE ON UPDATE CASCADE;
