/**
 * Test script to verify tax configuration with Stripe
 * Run with: node test-tax-config.js
 */

import { stripeServer } from './lib/billing/stripe-server.js';
import { getTaxRateForCheckout, isValidTaxRateId } from './lib/billing/tax-utils.js';

async function testTaxConfiguration() {
  console.log('🔍 Testing Tax Configuration...\n');

  // Check environment variables
  console.log('📋 Environment Variables:');
  console.log(`PRO_PRODUCT_Tax_ID: ${process.env.PRO_PRODUCT_Tax_ID || 'Not set'}`);
  console.log(`NTCLIPBOARD_PRODUCT_PRICE_ID: ${process.env.NTCLIPBOARD_PRODUCT_PRICE_ID || 'Not set'}`);
  console.log(`PRO_PRODUCT_PRICE_ID: ${process.env.PRO_PRODUCT_PRICE_ID || 'Not set'}\n`);

  // Test tax rate validation
  console.log('✅ Tax Rate Validation:');
  const taxRateId = process.env.PRO_PRODUCT_Tax_ID;
  const isValid = isValidTaxRateId(taxRateId);
  console.log(`Tax Rate ID Valid: ${isValid}`);
  console.log(`Tax Rate for Checkout: ${getTaxRateForCheckout() || 'None (using automatic tax)'}\n`);

  // Test tax rate retrieval from Stripe (if configured)
  if (taxRateId && isValid) {
    try {
      console.log('🏷️ Retrieving Tax Rate from Stripe:');
      const taxRate = await stripeServer.taxRates.retrieve(taxRateId);
      console.log(`Display Name: ${taxRate.display_name}`);
      console.log(`Percentage: ${taxRate.percentage}%`);
      console.log(`Jurisdiction: ${taxRate.jurisdiction}`);
      console.log(`Active: ${taxRate.active}\n`);
    } catch (error) {
      console.error(`❌ Error retrieving tax rate: ${error.message}\n`);
    }
  }

  // Test product price retrieval
  try {
    console.log('💰 Testing Product Prices:');
    
    if (process.env.NTCLIPBOARD_PRODUCT_PRICE_ID) {
      const ntPrice = await stripeServer.prices.retrieve(process.env.NTCLIPBOARD_PRODUCT_PRICE_ID);
      console.log(`NTClipboard Price: ${ntPrice.unit_amount / 100} ${ntPrice.currency.toUpperCase()}`);
    }
    
    if (process.env.PRO_PRODUCT_PRICE_ID) {
      const proPrice = await stripeServer.prices.retrieve(process.env.PRO_PRODUCT_PRICE_ID);
      console.log(`Pro Product Price: ${proPrice.unit_amount / 100} ${proPrice.currency.toUpperCase()}`);
    }
    
    console.log();
  } catch (error) {
    console.error(`❌ Error retrieving prices: ${error.message}\n`);
  }

  // Test checkout session creation with tax (simulation)
  console.log('🛒 Testing Checkout Session Configuration:');
  
  const checkoutConfig = {
    payment_method_types: ['card'],
    line_items: [
      {
        price: process.env.NTCLIPBOARD_PRODUCT_PRICE_ID,
        quantity: 1,
        tax_rates: getTaxRateForCheckout() ? [getTaxRateForCheckout()] : undefined
      }
    ],
    mode: 'payment',
    automatic_tax: { enabled: true },
    tax_id_collection: { enabled: true }
  };

  console.log('Checkout Configuration:');
  console.log('- Automatic Tax: ✅ Enabled');
  console.log('- Tax ID Collection: ✅ Enabled');
  console.log(`- Manual Tax Rate: ${checkoutConfig.line_items[0].tax_rates ? '✅ Configured' : '❌ Not set (using automatic)'}`);
  console.log();

  console.log('🎉 Tax configuration test completed!');
  console.log('\n📚 For detailed setup instructions, see TAX_CONFIGURATION.md');
}

// Run the test
testTaxConfiguration().catch(console.error);
