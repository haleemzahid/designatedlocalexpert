/**
 * Diagnose tax rate issues with Stripe
 * Run with: node diagnose-tax-rate.js
 */

import dotenv from 'dotenv';
import Stripe from 'stripe';

// Load environment variables
dotenv.config();

const stripeServer = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2024-06-20'
});

async function diagnoseTaxRate() {
  console.log('🔍 Diagnosing Tax Rate Issue...\n');

  const taxRateId = process.env.PRO_PRODUCT_Tax_ID;
  console.log(`Tax Rate ID: ${taxRateId}`);
  console.log(
    `Using Live Keys: ${process.env.STRIPE_SECRET_KEY?.startsWith('sk_live_') ? 'Yes' : 'No'}\n`
  );

  if (!taxRateId) {
    console.log('❌ No tax rate ID configured');
    return;
  }

  try {
    console.log('📋 Retrieving tax rate from Stripe...');
    const taxRate = await stripeServer.taxRates.retrieve(taxRateId);

    console.log('\n✅ Tax Rate Found:');
    console.log(`Display Name: ${taxRate.display_name}`);
    console.log(`Percentage: ${taxRate.percentage}%`);
    console.log(`Active: ${taxRate.active ? '✅ Active' : '❌ Inactive'}`);
    console.log(`Jurisdiction: ${taxRate.jurisdiction}`);
    console.log(
      `Created: ${new Date(taxRate.created * 1000).toLocaleDateString()}`
    );

    if (!taxRate.active) {
      console.log('\n🚨 ISSUE FOUND: Tax rate is inactive!');
      console.log('\n🔧 Solutions:');
      console.log('1. Activate the tax rate in Stripe Dashboard');
      console.log('2. Create a new active tax rate');
      console.log('3. Use automatic tax calculation instead');
    }
  } catch (error) {
    console.log('\n❌ Error retrieving tax rate:');
    console.log(`Error: ${error.message}`);
    console.log(`Type: ${error.type}`);

    if (error.code === 'resource_missing') {
      console.log('\n🚨 ISSUE FOUND: Tax rate does not exist!');
      console.log('\n🔧 Solutions:');
      console.log('1. Check if tax rate exists in current Stripe account');
      console.log(
        "2. Verify you're using the correct Stripe keys (live vs test)"
      );
      console.log('3. Create a new tax rate in Stripe Dashboard');
    }
  }

  // List available tax rates
  try {
    console.log('\n📋 Available Tax Rates in Account:');
    const taxRates = await stripeServer.taxRates.list({ limit: 10 });

    if (taxRates.data.length === 0) {
      console.log('No tax rates found in account');
    } else {
      taxRates.data.forEach((rate, index) => {
        console.log(
          `${index + 1}. ${rate.id} - ${rate.display_name} (${rate.percentage}%) - ${rate.active ? 'Active' : 'Inactive'}`
        );
      });
    }
  } catch (error) {
    console.log(`Error listing tax rates: ${error.message}`);
  }

  console.log('\n💡 Recommendations:');
  console.log('1. Use automatic tax calculation (recommended)');
  console.log('2. Remove PRO_PRODUCT_Tax_ID to disable manual tax rates');
  console.log('3. Create a new active tax rate if manual rates are required');
}

diagnoseTaxRate().catch(console.error);
