import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';
import AdmZip from 'adm-zip';
import { z } from 'zod';

import { prisma } from '@/lib/db/prisma';

const downloadSchema = z.object({
  token: z.string().min(1)
});

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const token = url.searchParams.get('token');

    if (!token) {
      return NextResponse.json(
        { error: 'Download token is required' },
        { status: 400 }
      );
    }

    const { token: validatedToken } = downloadSchema.parse({ token });

    // Find the purchase by download token
    const purchase = await prisma.purchase.findUnique({
      where: {
        downloadToken: validatedToken
      }
    });

    if (!purchase) {
      return NextResponse.json(
        { error: 'Invalid download token' },
        { status: 404 }
      );
    }

    if (purchase.status !== 'completed') {
      return NextResponse.json(
        { error: 'Purchase not completed' },
        { status: 400 }
      );
    }

    // Check if download link has expired
    if (purchase.expiresAt && purchase.expiresAt < new Date()) {
      return NextResponse.json(
        { error: 'Download link has expired' },
        { status: 410 }
      );
    }

    // Check download limit
    if (purchase.downloadCount >= purchase.maxDownloads) {
      return NextResponse.json(
        { error: 'Download limit exceeded' },
        { status: 429 }
      );
    }

    // Path to the application file
    const filePath = path.join(
      process.cwd(),
      'public',
      'downloads',
      'NTClipboard-Setup.exe'
    );

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Application file not found' },
        { status: 404 }
      );
    }

    // Create license file content
    const licenseFileContent = `NTClipboard License Key
========================

License Key: ${purchase.licenseKey}
Customer: ${purchase.customerName}
Email: ${purchase.email}
Purchase Date: ${purchase.createdAt.toISOString().split('T')[0]}

IMPORTANT INSTRUCTIONS:
1. Install NTClipboard using the included installer
2. When prompted, enter this license key along with your email address
3. This license is for single-system use only
4. Keep this file secure - the license key cannot be recovered if lost

For support, contact: support@ntclipboard.com
`;

    // Create a new ZIP file with both installer and license
    const zip = new AdmZip();

    // Add the original installer
    const installerBuffer = fs.readFileSync(filePath);
    zip.addFile('NTClipboard-Setup.exe', installerBuffer);

    // Add the license file
    zip.addFile('License-Key.txt', Buffer.from(licenseFileContent, 'utf8'));

    // Add readme file
    const readmeContent = `NTClipboard Installation Package
================================

This package contains:
1. NTClipboard-Setup.exe - The application installer
2. License-Key.txt - Your license key and activation instructions

Installation Steps:
1. Run NTClipboard-Setup.exe
2. Follow the installation wizard
3. When prompted for activation, use the license key from License-Key.txt
4. Enter your email address: ${purchase.email}

Your license key is: ${purchase.licenseKey}

Need help? Contact support@ntclipboard.com
`;

    zip.addFile('README.txt', Buffer.from(readmeContent, 'utf8'));

    // Generate the final ZIP buffer
    const zipBuffer = zip.toBuffer();

    // Increment download count
    await prisma.purchase.update({
      where: { id: purchase.id },
      data: { downloadCount: purchase.downloadCount + 1 }
    });

    return new Response(zipBuffer, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition':
          'attachment; filename="NTClipboard-Licensed.zip"',
        'Content-Length': zipBuffer.length.toString(),
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: '0'
      }
    });
  } catch (error) {
    console.error('Error processing download:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to process download' },
      { status: 500 }
    );
  }
}
