export interface LicenseActivationRequest {
  licenseKey: string;
  email: string;
  processorId: string;
  systemInfo: {
    platform: string;
    architecture: string;
    version: string;
  };
}

export interface LicenseActivationResponse {
  success: boolean;
  message: string;
  activatedAt?: Date;
  error?: string;
}

export interface LicenseValidationRequest {
  licenseKey: string;
  systemFingerprint: string;
  processorId: string;
}

export interface LicenseValidationResponse {
  valid: boolean;
  purchaseId?: string;
  activatedAt?: Date;
  customerName?: string;
  error?: string;
}

export type LicenseStatus = 'inactive' | 'active' | 'revoked';

export interface LicenseInfo {
  licenseKey: string;
  status: LicenseStatus;
  activatedAt?: Date;
  systemFingerprint?: string;
  processorId?: string;
}
