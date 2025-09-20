import crypto from 'crypto';

export interface SystemFingerprint {
  fingerprint: string;
  components: {
    userAgent: string;
    platform: string;
    language: string;
    timezone: string;
    screenResolution: string;
    hardwareInfo: string;
  };
}

export class SystemFingerprintGenerator {
  static generateFingerprint(req: Request): SystemFingerprint {
    const userAgent = req.headers.get('user-agent') || '';
    const acceptLanguage = req.headers.get('accept-language') || '';
    const platform = this.extractPlatform(userAgent);

    const components = {
      userAgent: userAgent.slice(0, 200), // Truncate for storage
      platform,
      language: acceptLanguage.slice(0, 50),
      timezone: req.headers.get('x-timezone') || 'UTC',
      screenResolution: req.headers.get('x-screen-resolution') || 'unknown',
      hardwareInfo: req.headers.get('x-hardware-info') || 'unknown'
    };

    // Create fingerprint hash
    const fingerprintData = [
      components.platform,
      components.language,
      components.timezone,
      components.screenResolution,
      components.hardwareInfo
    ].join('|');

    const fingerprint = crypto
      .createHash('sha256')
      .update(fingerprintData)
      .digest('hex');

    return { fingerprint, components };
  }

  private static extractPlatform(userAgent: string): string {
    if (userAgent.includes('Windows')) return 'Windows';
    if (userAgent.includes('Mac')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    return 'Unknown';
  }

  static validateFingerprint(stored: string, current: string): boolean {
    return stored === current;
  }
}
