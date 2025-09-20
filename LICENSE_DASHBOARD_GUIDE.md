# 📊 License Dashboard - Complete Guide

## Overview

Your NTClipboard license system now includes a comprehensive dashboard to view and manage all purchase data and license information.

## 🔗 API Endpoints Available

### 1. **Get All Licenses with Stats**

```
GET /api/admin/licenses?page=1&limit=50&status=active&search=john@example.com
```

**Response Example:**

```json
{
  "licenses": [
    {
      "id": "clxxx123",
      "email": "customer@example.com",
      "customerName": "John Doe",
      "amount": 4900,
      "currency": "usd",
      "stripeSessionId": "cs_test_xxx",
      "stripePaymentId": "pi_xxx",
      "status": "completed",
      "licenseKey": "NTCB-ABC1-DEF2-GHI3-JKL4-MNO5",
      "licenseStatus": "active",
      "activatedAt": "2024-01-15T10:30:00Z",
      "activatedEmail": "customer@example.com",
      "systemFingerprint": "abc123def456...",
      "processorId": "cpu-12345",
      "activationAttempts": 1,
      "maxActivationAttempts": 3,
      "downloadCount": 2,
      "maxDownloads": 5,
      "createdAt": "2024-01-15T09:00:00Z",
      "updatedAt": "2024-01-15T10:30:00Z",
      "expiresAt": "2024-01-22T09:00:00Z",
      "activations": [
        {
          "id": "activation-id",
          "status": "success",
          "ipAddress": "192.168.1.100",
          "userAgent": "Mozilla/5.0...",
          "createdAt": "2024-01-15T10:30:00Z",
          "errorMessage": null
        }
      ]
    }
  ],
  "stats": {
    "totalLicenses": 150,
    "totalRevenue": 735000,
    "statusBreakdown": {
      "active": 120,
      "inactive": 25,
      "revoked": 5
    }
  },
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 150,
    "totalPages": 3
  }
}
```

### 2. **Get Specific License Details**

```
GET /api/admin/licenses/[licenseId]
```

**Response Example:**

```json
{
  "license": {
    // Full license data including all activation attempts
  },
  "activationStats": {
    "totalAttempts": 5,
    "successfulAttempts": 1,
    "failedAttempts": 3,
    "blockedAttempts": 1,
    "uniqueIPs": 2,
    "lastAttempt": "2024-01-15T10:30:00Z"
  }
}
```

### 3. **Update License Status**

```
PATCH /api/admin/licenses/[licenseId]
```

**Request Body:**

```json
{
  "licenseStatus": "revoked",
  "notes": "License revoked for policy violation"
}
```

## 🌐 Access the Dashboard

### Option 1: Use the React Component

The dashboard is available at:

```
http://localhost:3000/admin/licenses
```

### Option 2: API Integration

Use the JavaScript functions from `docs/license-dashboard-usage.js`:

```javascript
// Get all licenses
const data = await getLicenses(1, 'active', 'search-term');

// Get specific license details
const details = await getLicenseDetails('license-id');

// Update license status
await updateLicenseStatus('license-id', 'revoked', 'Reason for revocation');
```

### Option 3: Direct API Calls

```bash
# Get all licenses
curl "http://localhost:3000/api/admin/licenses?page=1&limit=20"

# Get specific license
curl "http://localhost:3000/api/admin/licenses/clxxx123"

# Update license status
curl -X PATCH "http://localhost:3000/api/admin/licenses/clxxx123" \
  -H "Content-Type: application/json" \
  -d '{"licenseStatus": "revoked", "notes": "Admin action"}'
```

## 📊 Dashboard Features

### **Statistics Overview**

- Total number of licenses
- Total revenue generated
- License status breakdown (active/inactive/revoked)
- Purchase trends

### **License Management**

- View all purchases and license data
- Search by customer email or name
- Filter by license status
- Real-time status updates

### **Detailed Information**

For each license, you can see:

- **Purchase Details**: Customer info, payment amount, Stripe transaction
- **License Status**: Current activation state, attempts, system binding
- **Download Tracking**: Number of downloads, expiration dates
- **Activation History**: All activation attempts with IP addresses and timestamps
- **System Information**: Hardware fingerprints, processor IDs

### **Admin Actions**

- Activate inactive licenses
- Revoke active licenses
- View activation attempt logs
- Monitor suspicious activity

## 🛡️ Security & Monitoring

### **Fraud Detection**

The dashboard helps identify:

- Multiple activation attempts from different IPs
- Licenses with excessive failed attempts
- Unusual activation patterns
- Hardware fingerprint mismatches

### **Audit Trail**

Every action is logged:

- License activations and failures
- Admin status changes
- IP addresses and user agents
- Timestamps for all activities

## 📈 Key Metrics to Monitor

### **Revenue Metrics**

- Total sales: `stats.totalRevenue / 100` (convert from cents)
- Average order value
- Sales trends over time

### **License Health**

- **Active Rate**: `active / total * 100`
- **Activation Rate**: `activated / sold * 100`
- **Download Completion**: `downloaded / sold * 100`

### **Security Metrics**

- Failed activation attempts per license
- Number of revoked licenses
- Geographic distribution of activations
- Hardware change frequency

## 🔧 Customization

### **Add Custom Filters**

Modify the API to add more filters:

```javascript
// In /api/admin/licenses/route.ts
if (dateRange) {
  where.createdAt = {
    gte: new Date(dateRange.start),
    lte: new Date(dateRange.end)
  };
}

if (country) {
  where.activations = {
    some: {
      ipAddress: { contains: countryIP }
    }
  };
}
```

### **Export Data**

Add export functionality:

```javascript
// Export to CSV
const exportLicenses = async () => {
  const response = await fetch('/api/admin/licenses/export');
  const blob = await response.blob();

  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'licenses.csv';
  a.click();
};
```

## 🎯 Business Insights

### **Customer Behavior**

- Track download patterns
- Monitor activation timeframes
- Identify support needs

### **Product Performance**

- License utilization rates
- Geographic adoption
- Technical support requirements

### **Revenue Optimization**

- Identify upselling opportunities
- Monitor refund patterns
- Track customer lifetime value

## 🚀 Next Steps

1. **Add the dashboard to your admin navigation**
2. **Set up monitoring alerts for suspicious activity**
3. **Create automated reports for business metrics**
4. **Implement customer self-service portal**
5. **Add advanced analytics and charts**

Your license dashboard provides complete visibility into your NTClipboard business, from purchase to activation to ongoing usage monitoring! 🎉
