/**
 * Create Pakistan tax rate in Stripe
 * Run with: node create-pakistan-tax-rate.js
 */

import dotenv from 'dotenv';
import Stripe from 'stripe';

// Load environment variables
dotenv.config();

const stripeServer = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2024-06-20'
});

async function createPakistanTaxRate() {
  console.log('🇵🇰 Creating Pakistan Tax Rate...\n');

  try {
    // Create Pakistan GST tax rate (17%)
    const taxRate = await stripeServer.taxRates.create({
      display_name: 'Pakistan GST',
      percentage: 17.0, // Standard Pakistan GST rate
      jurisdiction: 'PK', // Pakistan country code
      inclusive: false, // Tax is added on top of price
      active: true,
      description: 'Pakistan General Sales Tax (GST) - 17%'
    });

    console.log('✅ Pakistan Tax Rate Created Successfully!');
    console.log(`Tax Rate ID: ${taxRate.id}`);
    console.log(`Display Name: ${taxRate.display_name}`);
    console.log(`Percentage: ${taxRate.percentage}%`);
    console.log(`Jurisdiction: ${taxRate.jurisdiction}`);
    console.log(`Active: ${taxRate.active}`);

    console.log('\n📋 Add this to your .env file:');
    console.log(`PRO_PRODUCT_Tax_ID=${taxRate.id}`);

    console.log('\n🔧 Next steps:');
    console.log('1. Uncomment PRO_PRODUCT_Tax_ID in your .env file');
    console.log('2. Update the value with the new tax rate ID');
    console.log('3. Test the checkout flow');
  } catch (error) {
    console.error('❌ Error creating tax rate:', error.message);

    if (error.type === 'StripeInvalidRequestError') {
      console.log('\n💡 Possible solutions:');
      console.log('1. Check if you have permission to create tax rates');
      console.log('2. Verify your Stripe account is properly set up');
      console.log("3. Ensure you're using live API keys for production");
    }
  }
}

createPakistanTaxRate().catch(console.error);
