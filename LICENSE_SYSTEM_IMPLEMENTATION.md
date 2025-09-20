# NTClipboard License Key System Implementation

## Overview

This document outlines the comprehensive license key protection system implemented for NTClipboard. The system provides secure license key generation, system binding, and activation validation to prevent piracy.

## Features

- **Encrypted License Keys**: Generate unique, encrypted license keys for each purchase
- **System Binding**: Bind licenses to specific hardware/software fingerprints
- **Activation Tracking**: Log all activation attempts for security monitoring
- **Single System Use**: Prevent license sharing across multiple systems
- **Automatic Integration**: Seamless integration with existing Stripe payment flow
- **Download Protection**: Licensed downloads include both installer and license files

## Architecture

### Database Schema

The system extends the existing `Purchase` model with license-related fields:

- `licenseKey`: The actual license key string
- `licenseKeyHash`: SHA-256 hash for secure database lookups
- `licenseStatus`: Current status (inactive, active, revoked)
- `activatedAt`: Timestamp of activation
- `systemFingerprint`: Unique system identifier
- `processorId`: Hardware processor identifier
- `activationAttempts`: Counter for failed attempts

### Components

1. **License Key Generator** (`lib/license/license-key-generator.ts`)

   - Generates unique license keys with NTCB prefix
   - Uses AES-256-GCM encryption
   - Creates SHA-256 hashes for secure lookups

2. **System Fingerprinting** (`lib/license/system-fingerprint.ts`)

   - Creates unique fingerprints based on system characteristics
   - Uses browser headers and hardware information
   - Consistent fingerprint generation for validation

3. **API Endpoints**

   - `/api/license/activate`: Activate a license key
   - `/api/license/validate`: Validate an active license
   - `/api/admin/licenses`: Admin dashboard for license management

4. **Download System Updates** (`app/api/download/route.ts`)
   - Creates ZIP packages with installer and license files
   - Includes activation instructions
   - Tracks download attempts

## API Usage

### License Activation

```typescript
POST /api/license/activate
{
  "licenseKey": "NTCB-XXXX-XXXX-XXXX-XXXX-XXXX",
  "email": "customer@example.com",
  "processorId": "unique-processor-id",
  "systemInfo": {
    "platform": "Windows",
    "architecture": "x64",
    "version": "10.0.19041"
  }
}
```

### License Validation

```typescript
POST /api/license/validate
{
  "licenseKey": "NTCB-XXXX-XXXX-XXXX-XXXX-XXXX",
  "systemFingerprint": "generated-fingerprint",
  "processorId": "unique-processor-id"
}
```

## Security Features

### Encryption

- License keys use AES-256-GCM encryption
- Database stores SHA-256 hashes, not plain text keys
- Environment variable for encryption key

### System Binding

- Hardware fingerprinting prevents license sharing
- Processor ID validation for additional security
- IP address and user agent logging

### Rate Limiting

- Maximum activation attempts (default: 3)
- Blocks after exceeding attempt limit
- Comprehensive logging for audit trails

## Installation Steps

### 1. Database Migration

```bash
npx prisma migrate dev --name add_license_system
```

### 2. Install Dependencies

```bash
npm install adm-zip nanoid @types/adm-zip
```

### 3. Environment Variables

Add to your `.env` file:

```env
LICENSE_ENCRYPTION_KEY="your-secure-32-character-encryption-key-here"
```

Generate a secure key:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 4. File Structure

The implementation creates these new files:

```
lib/license/
├── license-key-generator.ts
└── system-fingerprint.ts

app/api/license/
├── activate/route.ts
└── validate/route.ts

app/api/admin/
└── licenses/route.ts

types/
└── license.ts

tests/
└── license-system.test.ts
```

## Testing

Run the license system validation:

```bash
npx tsx tests/license-system.test.ts
```

## Purchase Flow Integration

The system automatically integrates with the existing Stripe webhook:

1. **Payment Completion**: Stripe webhook triggers
2. **License Generation**: Unique license key created
3. **Database Storage**: Purchase record updated with license info
4. **Customer Download**: ZIP package includes license files

## Download Process

1. Customer completes purchase
2. Receives download link via email
3. Downloads ZIP containing:
   - `NTClipboard-Setup.exe` (installer)
   - `License-Key.txt` (license key and instructions)
   - `README.txt` (installation guide)

## Client Integration

For the NTClipboard desktop application, implement:

1. **License Input Dialog**: Prompt for license key and email
2. **System Fingerprinting**: Generate hardware fingerprint
3. **Activation Request**: Call `/api/license/activate`
4. **Validation Loop**: Periodic calls to `/api/license/validate`

## Admin Dashboard

Access license information at `/api/admin/licenses`:

- View all licenses and their status
- Filter by activation status
- Monitor activation attempts
- Revoke licenses if needed

## Error Handling

The system handles various error scenarios:

- Invalid license keys
- Email mismatches
- Already activated licenses
- Exceeded activation attempts
- Revoked licenses
- System validation failures

## Monitoring

All activation attempts are logged with:

- IP address
- User agent
- System fingerprint
- Success/failure status
- Error messages
- Timestamps

## Security Considerations

1. **Never expose encryption keys**
2. **Use HTTPS for all API calls**
3. **Implement rate limiting on endpoints**
4. **Monitor activation logs for suspicious activity**
5. **Regularly rotate encryption keys in production**
6. **Validate all input data thoroughly**

## Production Deployment

1. Set secure `LICENSE_ENCRYPTION_KEY`
2. Enable rate limiting middleware
3. Configure monitoring alerts
4. Test license activation flow
5. Verify download system works
6. Monitor activation logs

## Support

For license-related customer support:

1. Check license status in admin dashboard
2. Verify system fingerprint changes
3. Reset activation attempts if needed
4. Issue new license if hardware changed

## Troubleshooting

### License Activation Fails

- Check email matches purchase
- Verify license hasn't expired
- Confirm system fingerprint generation
- Check activation attempt limits

### Download Issues

- Verify installer file exists in `/public/downloads/`
- Check ZIP generation process
- Validate purchase record exists
- Confirm download token is valid

## Future Enhancements

Consider implementing:

- Multi-device licensing options
- Hardware change tolerance
- Offline activation capabilities
- License transfer mechanisms
- Advanced fraud detection
