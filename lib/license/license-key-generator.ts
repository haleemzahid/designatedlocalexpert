import crypto from 'crypto';
import { customAlphabet } from 'nanoid';

const LICENSE_KEY_ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nanoid = customAlphabet(LICENSE_KEY_ALPHABET, 8);

export interface LicenseKeyData {
  purchaseId: string;
  email: string;
  timestamp: number;
  productCode: string;
}

export class LicenseKeyGenerator {
  private static readonly ENCRYPTION_KEY = process.env.LICENSE_ENCRYPTION_KEY || '';
  private static readonly ALGORITHM = 'aes-256-gcm';
  private static readonly PRODUCT_CODE = 'NTCB'; // NTClipboard

  static generateLicenseKey(purchaseId: string, email: string): string {
    const keyData: LicenseKeyData = {
      purchaseId,
      email: email.toLowerCase(),
      timestamp: Date.now(),
      productCode: this.PRODUCT_CODE
    };

    const dataString = JSON.stringify(keyData);
    const encrypted = this.encrypt(dataString);
    
    // Format: NTCB-XXXX-XXXX-XXXX-XXXX-XXXX
    const segments = [
      this.PRODUCT_CODE,
      nanoid(),
      nanoid(),
      nanoid(),
      nanoid(),
      encrypted.slice(0, 8).toUpperCase()
    ];

    return segments.join('-');
  }

  static validateLicenseKey(licenseKey: string): { valid: boolean; data?: LicenseKeyData; error?: string } {
    try {
      const segments = licenseKey.split('-');
      if (segments.length !== 6 || segments[0] !== this.PRODUCT_CODE) {
        return { valid: false, error: 'Invalid license key format' };
      }

      // For now, we'll validate format only
      // Full validation happens server-side with database lookup
      return { valid: true };
    } catch (error) {
      return { valid: false, error: 'Invalid license key' };
    }
  }

  static hashLicenseKey(licenseKey: string): string {
    return crypto.createHash('sha256').update(licenseKey).digest('hex');
  }

  private static encrypt(text: string): string {
    const iv = crypto.randomBytes(16);
    const key = crypto.scryptSync(this.ENCRYPTION_KEY, 'salt', 32);
    const cipher = crypto.createCipheriv(this.ALGORITHM, key, iv);
    
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    return iv.toString('hex') + ':' + encrypted;
  }

  private static decrypt(encryptedData: string): string {
    const parts = encryptedData.split(':');
    const iv = Buffer.from(parts[0], 'hex');
    const encrypted = parts[1];
    const key = crypto.scryptSync(this.ENCRYPTION_KEY, 'salt', 32);
    
    const decipher = crypto.createDecipheriv(this.ALGORITHM, key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
  }
}
