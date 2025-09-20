import 'server-only';

import { stripeServer } from '@/lib/billing/stripe-server';
import { cache } from 'react';

export interface ProductPricing {
  id: string;
  amount: number; // in cents
  currency: string;
  productName: string;
  productDescription: string;
  formattedPrice: string;
}

async function fetchNTClipboardPricing(): Promise<ProductPricing | null> {
  if (!process.env.NTCLIPBOARD_PRODUCT_PRICE_ID) {
    console.warn('NTCLIPBOARD_PRODUCT_PRICE_ID not configured');
    return null;
  }

  try {
    const price = await stripeServer.prices.retrieve(
      process.env.NTCLIPBOARD_PRODUCT_PRICE_ID,
      {
        expand: ['product']
      }
    );

    const product = price.product as any;
    
    return {
      id: price.id,
      amount: price.unit_amount || 0,
      currency: price.currency,
      productName: product.name || 'NTClipboard Desktop Application',
      productDescription: product.description || 'Complete NTClipboard Desktop Application',
      formattedPrice: formatPrice(price.unit_amount || 0, price.currency)
    };
  } catch (error) {
    console.error('Error fetching NTClipboard pricing from Stripe:', error);
    return null;
  }
}

function formatPrice(amount: number, currency: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase()
  }).format(amount / 100);
}

// Cache the pricing data for better performance
export const getNTClipboardPricing = cache(fetchNTClipboardPricing);
