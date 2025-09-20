// Example client-side implementation for NTClipboard desktop app

class LicenseManager {
  // Generate hardware-specific fingerprint
  static generateSystemFingerprint() {
    const systemInfo = {
      platform: process.platform,
      arch: process.arch,
      hostname: os.hostname(),
      totalMemory: os.totalmem(),
      cpus: os.cpus().length,
      networkInterfaces: Object.keys(os.networkInterfaces()).join(',')
      // Add more hardware-specific data
    };

    const fingerprintData = Object.values(systemInfo).join('|');
    return crypto.createHash('sha256').update(fingerprintData).digest('hex');
  }

  // Get processor ID (more stable than other identifiers)
  static getProcessorId() {
    // Implementation depends on your platform
    // Windows: WMIC command
    // macOS: system_profiler
    // Linux: /proc/cpuinfo
    return this.getHardwareId();
  }

  // Activate license with server
  static async activateLicense(licenseKey, email) {
    const systemFingerprint = this.generateSystemFingerprint();
    const processorId = this.getProcessorId();

    const response = await fetch('/api/license/activate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        licenseKey,
        email,
        processorId,
        systemInfo: {
          platform: process.platform,
          architecture: process.arch,
          version: os.release()
        }
      })
    });

    const result = await response.json();

    if (result.success) {
      // Store encrypted license data locally
      this.storeLicenseData({ licenseKey, systemFingerprint, processorId });
      return { success: true };
    } else {
      return { success: false, error: result.error };
    }
  }

  // Validate license on app startup
  static async validateLicense() {
    const localData = this.getStoredLicenseData();
    if (!localData) return { valid: false, error: 'No license found' };

    const currentFingerprint = this.generateSystemFingerprint();
    const currentProcessorId = this.getProcessorId();

    // Check if hardware changed significantly
    if (
      currentFingerprint !== localData.systemFingerprint ||
      currentProcessorId !== localData.processorId
    ) {
      return { valid: false, error: 'Hardware mismatch - license invalid' };
    }

    // Validate with server
    const response = await fetch('/api/license/validate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        licenseKey: localData.licenseKey,
        systemFingerprint: currentFingerprint,
        processorId: currentProcessorId
      })
    });

    return await response.json();
  }
}
