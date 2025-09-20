# Environment Variables for Stripe Integration

Add the following environment variables to your .env.local file:

# Stripe Configuration

STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Product Configuration (for subscription billing)

PRO_PRODUCT_PRICE_ID=price_your_subscription_price_id_here

# Tax Configuration (optional - for manual tax rates)

PRO_PRODUCT_Tax_ID=txr_your_tax_rate_id_here

# NTClipboard One-time Purchase Configuration

NTCLIPBOARD_PRODUCT_PRICE_ID=price_your_ntclipboard_price_id_here

# Application URL (used for Stripe checkout redirects)

NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database URL (if not already configured)

DATABASE_URL=your_database_url_here

## Setup Instructions:

1. Create a Stripe account at https://stripe.com
2. Get your API keys from the Stripe Dashboard (Developers > API keys)
3. Create products and prices in Stripe Dashboard:
   - Create a subscription product for organization billing (PRO_PRODUCT_PRICE_ID)
   - Create a one-time payment product for NTClipboard (NTCLIPBOARD_PRODUCT_PRICE_ID)
4. **Configure Tax Settings (New!)**:
   - Go to Settings > Tax settings in Stripe Dashboard
   - Enable automatic tax calculation (recommended)
   - OR create manual tax rates and copy the Tax Rate ID to PRO_PRODUCT_Tax_ID
   - See TAX_CONFIGURATION.md for detailed tax setup guide
5. Create a webhook endpoint in Stripe Dashboard (Developers > Webhooks)
   - Set the endpoint URL to: `your-domain.com/api/stripe/webhook`
   - Select the following events:
     - checkout.session.completed
     - customer.subscription.created
     - customer.subscription.updated
     - customer.subscription.deleted
6. Copy the webhook signing secret
7. Add all the environment variables to your .env.local file

## Tax Features Included:

✅ **Automatic Tax Calculation**: Uses Stripe's built-in tax calculation  
✅ **Tax ID Collection**: Customers can provide business tax IDs  
✅ **Address-based Tax**: Tax rates determined by billing address  
✅ **Tax Display**: Tax amounts shown in checkout and billing  
✅ **International Support**: VAT, GST, and sales tax support

## Testing:

- Use Stripe test keys (starting with pk*test* and sk*test*) for development
- Use test card numbers like 4242424242424242 for testing payments
- Test with different billing addresses to verify tax calculation
- Check that tax amounts appear correctly in checkout

## Production:

- Replace test keys with live keys (starting with pk*live* and sk*live*)
- Update NEXT_PUBLIC_APP_URL to your production domain
- Update webhook endpoint URL in Stripe Dashboard
- Verify tax configuration with your business requirements
