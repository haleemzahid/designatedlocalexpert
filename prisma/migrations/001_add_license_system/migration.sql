-- Add license key columns to existing Purchase table
ALTER TABLE "purchases" 
ADD COLUMN "licenseKey" TEXT,
ADD COLUMN "licenseKeyHash" TEXT UNIQUE,
ADD COLUMN "licenseStatus" TEXT NOT NULL DEFAULT 'inactive',
ADD COLUMN "activatedAt" TIMESTAMP(3),
ADD COLUMN "activatedEmail" TEXT,
ADD COLUMN "systemFingerprint" TEXT,
ADD COLUMN "processorId" TEXT,
ADD COLUMN "activationAttempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN "maxActivationAttempts" INTEGER NOT NULL DEFAULT 3;

-- Create license activation log table
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

-- Add indexes
CREATE INDEX "IX_purchases_licenseKeyHash" ON "purchases"("licenseKeyHash");
CREATE INDEX "IX_purchases_licenseStatus" ON "purchases"("licenseStatus");
CREATE INDEX "IX_purchases_systemFingerprint" ON "purchases"("systemFingerprint");
CREATE INDEX "IX_license_activations_purchaseId" ON "license_activations"("purchaseId");
CREATE INDEX "IX_license_activations_systemFingerprint" ON "license_activations"("systemFingerprint");

-- Add foreign key constraint
ALTER TABLE "license_activations" ADD CONSTRAINT "license_activations_purchaseId_fkey" 
FOREIGN KEY ("purchaseId") REFERENCES "purchases"("id") ON DELETE CASCADE ON UPDATE CASCADE;
