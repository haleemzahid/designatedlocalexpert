import { stripeServer } from '@/lib/billing/stripe-server';

async function testStripePrice() {
  try {
    console.log('Testing NTCLIPBOARD_PRODUCT_PRICE_ID:', process.env.NTCLIPBOARD_PRODUCT_PRICE_ID);
    
    if (!process.env.NTCLIPBOARD_PRODUCT_PRICE_ID) {
      console.error('NTCLIPBOARD_PRODUCT_PRICE_ID not found in environment');
      return;
    }

    const price = await stripeServer.prices.retrieve(
      process.env.NTCLIPBOARD_PRODUCT_PRICE_ID,
      {
        expand: ['product']
      }
    );

    console.log('Price details:', {
      id: price.id,
      amount: price.unit_amount,
      currency: price.currency,
      product: price.product
    });
  } catch (error) {
    console.error('Error fetching price from Stripe:', error);
  }
}

testStripePrice();
