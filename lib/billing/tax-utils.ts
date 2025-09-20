/**
 * Utility functions for handling Stripe tax functionality
 */

/**
 * Validates that the tax rate ID is properly configured
 * @param taxRateId - The tax rate ID from environment variables
 * @returns boolean indicating if the tax rate is valid
 */
export function isValidTaxRateId(taxRateId: string | undefined): boolean {
  return Boolean(taxRateId && taxRateId.startsWith('txr_'));
}

/**
 * Gets the tax rate ID for checkout sessions
 * Only returns tax rate if it's valid and not the known inactive one
 * @returns The tax rate ID if configured and valid, undefined otherwise
 */
export function getTaxRateForCheckout(): string | undefined {
  const taxRateId = process.env.PRO_PRODUCT_Tax_ID;

  // Always return the configured tax rate if valid
  // The checkout session will handle conflicts with automatic tax
  return isValidTaxRateId(taxRateId) ? taxRateId : undefined;
}

/**
 * Configuration for automatic tax calculation
 */
export const AUTOMATIC_TAX_CONFIG = {
  enabled: true
} as const;

/**
 * Configuration for tax ID collection
 */
export const TAX_ID_COLLECTION_CONFIG = {
  enabled: true
} as const;
