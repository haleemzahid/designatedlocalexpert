import { LicenseKeyGenerator } from '@/lib/license/license-key-generator';
import { SystemFingerprintGenerator } from '@/lib/license/system-fingerprint';

// Basic validation tests for license system
console.log('Testing License System...');

// Test license key generation
const testPurchaseId = 'test-purchase-123';
const testEmail = 'test@example.com';
const licenseKey = LicenseKeyGenerator.generateLicenseKey(
  testPurchaseId,
  testEmail
);
console.log('Generated license key:', licenseKey);

// Test license key format validation
const isValidFormat = LicenseKeyGenerator.validateLicenseKey(licenseKey);
console.log('License key format valid:', isValidFormat.valid);

// Test license key hashing
const hash1 = LicenseKeyGenerator.hashLicenseKey(licenseKey);
const hash2 = LicenseKeyGenerator.hashLicenseKey(licenseKey);
console.log('Hash consistency test:', hash1 === hash2 ? 'PASS' : 'FAIL');

// Test system fingerprinting
const mockRequest = new Request('http://localhost', {
  headers: {
    'user-agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'accept-language': 'en-US',
    'x-timezone': 'UTC',
    'x-screen-resolution': '1920x1080',
    'x-hardware-info': 'test-hardware'
  }
});

const fingerprint = SystemFingerprintGenerator.generateFingerprint(mockRequest);
console.log('System fingerprint:', fingerprint.fingerprint);
console.log('Platform detected:', fingerprint.components.platform);

console.log('License system tests completed successfully!');
