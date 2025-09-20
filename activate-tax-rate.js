/**
 * Activate inactive tax rate in Stripe
 * Run with: node activate-tax-rate.js
 */

import Stripe from 'stripe';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const stripeServer = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2024-06-20'
});

async function activateTaxRate() {
  console.log('🔧 Activating Tax Rate...\n');

  const taxRateId = 'txr_1RgfgfRvWRTKHSeGo7KkFyx2'; // The inactive 13% tax rate

  try {
    console.log(`📋 Current status of tax rate: ${taxRateId}`);
    
    // First, check current status
    const currentTaxRate = await stripeServer.taxRates.retrieve(taxRateId);
    console.log(`Display Name: ${currentTaxRate.display_name}`);
    console.log(`Percentage: ${currentTaxRate.percentage}%`);
    console.log(`Current Status: ${currentTaxRate.active ? 'Active' : 'Inactive'}`);
    
    if (currentTaxRate.active) {
      console.log('\n✅ Tax rate is already active!');
      return;
    }

    console.log('\n🔄 Activating tax rate...');
    
    // Activate the tax rate
    const updatedTaxRate = await stripeServer.taxRates.update(taxRateId, {
      active: true
    });

    console.log('\n✅ Tax Rate Activated Successfully!');
    console.log(`Tax Rate ID: ${updatedTaxRate.id}`);
    console.log(`Display Name: ${updatedTaxRate.display_name}`);
    console.log(`Percentage: ${updatedTaxRate.percentage}%`);
    console.log(`Status: ${updatedTaxRate.active ? '✅ Active' : '❌ Inactive'}`);
    
    console.log('\n📋 To use this tax rate, update your .env file:');
    console.log(`PRO_PRODUCT_Tax_ID=${updatedTaxRate.id}`);
    
    console.log('\n🎯 Next steps:');
    console.log('1. Choose which tax rate to use (13% or 17%)');
    console.log('2. Update PRO_PRODUCT_Tax_ID in your .env file');
    console.log('3. Test the checkout flow');
    
  } catch (error) {
    console.error('❌ Error activating tax rate:', error.message);
    
    if (error.type === 'StripeInvalidRequestError') {
      console.log('\n💡 Possible solutions:');
      console.log('1. Check if the tax rate ID exists');
      console.log('2. Verify you have permission to modify tax rates');
      console.log('3. Ensure you\'re using the correct Stripe account');
    }
  }
}

activateTaxRate().catch(console.error);
