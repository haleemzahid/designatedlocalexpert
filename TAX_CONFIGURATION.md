# Tax Configuration Guide for NTClipboard

This guide explains how to set up and configure tax handling in your Stripe integration.

## 🏛️ Tax Configuration in Stripe Dashboard

### 1. Enable Automatic Tax

1. Go to your Stripe Dashboard
2. Navigate to **Settings** → **Tax settings**
3. Enable **Automatic tax calculation**
4. Configure your business address and tax registration details

### 2. Create Tax Rates (Manual Method)

If you prefer manual tax rates instead of automatic tax:

1. Go to **Products** → **Tax rates** in Stripe Dashboard
2. Click **Create tax rate**
3. Fill in the details:
   - **Display name**: e.g., "Sales Tax", "VAT", etc.
   - **Percentage**: e.g., 8.25 for 8.25%
   - **Jurisdiction**: Country/state where tax applies
   - **Tax type**: Sales tax, VAT, etc.
4. Copy the Tax Rate ID (starts with `txr_`)

### 3. Update Environment Variables

Add the tax rate ID to your `.env` file:

```env
PRO_PRODUCT_Tax_ID=txr_1RgfgfRvWRTKHSeGo7KkFyx2
```

## 🔧 Implementation Features

### Automatic Tax Calculation

- **Enabled by default**: The system uses Stripe's automatic tax calculation
- **Location-based**: Tax rates are determined by customer billing address
- **Real-time**: Tax amounts are calculated during checkout

### Tax Collection

- **Tax ID Collection**: Customers can provide tax IDs for business purchases
- **Address Collection**: Billing addresses are automatically collected for tax calculation
- **Multi-jurisdiction**: Supports tax calculation across different countries and states

### Tax Display

- **Billing Breakdown**: Tax amounts are displayed in the billing breakdown table
- **Invoices**: Tax information is included in generated invoices
- **Receipts**: Tax details are shown in payment confirmations

## 📊 Tax Information Tracking

### Database Storage

- **Total Amount**: Includes tax in purchase records
- **Tax Breakdown**: Available in billing details API
- **Invoice Data**: Tax amounts stored with invoice records

### API Responses

Tax information is available in:

- Billing breakdown API responses
- Invoice data
- Purchase confirmation details

## 🌍 International Tax Compliance

### Supported Tax Types

- **US Sales Tax**: State and local tax rates
- **EU VAT**: Value Added Tax for European Union
- **GST**: Goods and Services Tax (Canada, Australia, etc.)
- **Custom Rates**: Manual tax rates for specific jurisdictions

### Compliance Features

- **Tax Registration**: Configure your business tax registrations in Stripe
- **Reporting**: Access tax reports through Stripe Dashboard
- **Documentation**: Automatic tax documentation for compliance

## 🔍 Testing Tax Configuration

### Test Mode

1. Use Stripe test keys for development
2. Test with different billing addresses
3. Verify tax calculations are correct
4. Check that tax information appears in checkout

### Test Scenarios

- **US Address**: Should apply appropriate state/local tax
- **EU Address**: Should apply VAT where applicable
- **Business Customer**: Should allow tax ID entry
- **Tax-exempt**: Configure exemptions if needed

## 🚀 Production Configuration

### Go Live Checklist

- [ ] Configure business address in Stripe
- [ ] Set up tax registrations
- [ ] Test tax calculations
- [ ] Verify tax appears in checkouts
- [ ] Update environment variables
- [ ] Monitor tax collection in dashboard

### Monitoring

- Check tax collection rates in Stripe Dashboard
- Review tax amounts in billing reports
- Monitor customer feedback about tax calculations
- Verify compliance with local tax requirements

## ⚠️ Important Notes

### Tax Rate Configuration

- **Automatic vs Manual**: Automatic tax is recommended for most businesses
- **Tax Rate ID**: Only needed if using manual tax rates
- **Fallback**: System works without tax rates but won't collect tax

### Compliance Responsibility

- **Business Registration**: Ensure your business is properly registered for tax collection
- **Rate Updates**: Automatic tax handles rate changes automatically
- **Reporting**: Use Stripe's tax reporting for compliance needs

### Customer Experience

- **Transparency**: Tax amounts are clearly displayed before payment
- **Flexibility**: Customers can enter tax IDs for business purchases
- **Accuracy**: Real-time calculation ensures correct tax amounts

---

## 🔗 Related Documentation

- [Stripe Tax Documentation](https://stripe.com/docs/tax)
- [Automatic Tax Setup](https://stripe.com/docs/tax/set-up)
- [Tax Rates API](https://stripe.com/docs/api/tax_rates)
