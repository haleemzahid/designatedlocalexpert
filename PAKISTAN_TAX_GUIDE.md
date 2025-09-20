# Pakistan Tax Configuration Guide

## Why Tax Shows PKR 0.00

When tax shows 0 in Stripe checkout for Pakistan, it's usually because:

1. **No tax registrations configured** in Stripe for Pakistan
2. **Automatic tax not enabled** for Pakistan region
3. **Business location not set** correctly
4. **Pakistan tax requirements** not configured

## 🔧 Solutions for Pakistan Tax

### Option 1: Manual Tax Rate (Recommended for Pakistan)

Since automatic tax may not be fully configured for Pakistan, create a manual tax rate:

1. **Go to Stripe Dashboard** → **Products** → **Tax rates**
2. **Create new tax rate**:

   - **Display name**: "Pakistan Sales Tax" or "GST"
   - **Percentage**: 17% (standard Pakistan GST rate)
   - **Jurisdiction**: Pakistan
   - **Type**: GST/Sales Tax
   - **Active**: ✅ Enabled

3. **Copy the Tax Rate ID** and update your `.env`:

```env
# Uncomment and update with new tax rate ID
PRO_PRODUCT_Tax_ID=txr_your_new_pakistan_tax_rate_id
```

### Option 2: Configure Automatic Tax for Pakistan

1. **Go to Stripe Dashboard** → **Settings** → **Tax settings**
2. **Business information**:
   - Set your business address in Pakistan
   - Add Pakistan tax registration number if applicable
3. **Tax calculation**:
   - Enable automatic tax calculation
   - Configure Pakistan-specific settings

### Option 3: Address-Based Tax Detection

Update checkout to ensure proper address collection:

```javascript
// Enhanced address collection
customer_update: {
  name: 'auto',
  address: 'auto'
},
billing_address_collection: 'required'
```

## 🇵🇰 Pakistan Tax Information

### Standard Tax Rates

- **GST (General Sales Tax)**: 17%
- **Provincial Sales Tax**: Varies by province (0-17%)
- **Services Tax**: Varies by province

### Business Requirements

- **NTN (National Tax Number)** for business registration
- **STRN (Sales Tax Registration Number)** for GST
- **Provincial registration** for provincial taxes

## 🚀 Quick Fix Implementation

Let me update your system to handle Pakistan tax properly:
