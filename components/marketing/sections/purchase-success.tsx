'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircleIcon, DownloadIcon, RefreshCcwIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

interface Purchase {
  id: string;
  email: string;
  customerName: string;
  downloadToken: string;
  downloadCount: number;
  maxDownloads: number;
  expiresAt: string | null;
  createdAt: string;
}

export function PurchaseSuccess() {
  const searchParams = useSearchParams();
  const [purchase, setPurchase] = useState<Purchase | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [isDownloading, setIsDownloading] = useState(false);

  const sessionId = searchParams.get('session_id');

  // Debug logging
  console.log('=== Purchase Success Component Debug ===');
  console.log('Raw session_id from URL:', sessionId);
  console.log('Session ID length:', sessionId?.length);
  console.log(
    'Current URL:',
    typeof window !== 'undefined' ? window.location.href : 'SSR'
  );
  console.log('Search params:', searchParams.toString());

  useEffect(() => {
    if (!sessionId) {
      setError('No session ID provided');
      setIsLoading(false);
      return;
    }

    const verifyPurchase = async () => {
      try {
        console.log('=== Sending Purchase Verification Request ===');
        console.log('Session ID being sent:', sessionId);
        console.log('Session ID type:', typeof sessionId);
        console.log('Session ID length:', sessionId?.length);

        const requestBody = { sessionId };
        console.log('Request body:', JSON.stringify(requestBody, null, 2));

        const response = await fetch('/api/purchase/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        });

        console.log('Response status:', response.status);
        console.log(
          'Response headers:',
          Object.fromEntries(response.headers.entries())
        );

        const data = await response.json();
        console.log('Response data:', JSON.stringify(data, null, 2));

        if (!response.ok) {
          throw new Error(data.error || 'Failed to verify purchase');
        }

        setPurchase(data.purchase);
      } catch (err) {
        console.error('Purchase verification error:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    verifyPurchase();
  }, [sessionId]);

  const handleDownload = async () => {
    if (!purchase) return;

    setIsDownloading(true);
    try {
      const response = await fetch(
        `/api/download?token=${purchase.downloadToken}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Download failed');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'NTClipboard-Setup.zip';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      // Refresh purchase data to get updated download count
      const verifyResponse = await fetch('/api/purchase/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sessionId })
      });

      if (verifyResponse.ok) {
        const data = await verifyResponse.json();
        setPurchase(data.purchase);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Download failed');
    } finally {
      setIsDownloading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto flex min-h-screen items-center justify-center py-8">
        <div className="text-center">
          <RefreshCcwIcon className="mx-auto size-8 animate-spin text-orange-500" />
          <p className="mt-2 text-muted-foreground">
            Verifying your purchase...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto flex min-h-screen items-center justify-center py-8">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-red-600">
              Purchase Verification Failed
            </CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button
              onClick={() => (window.location.href = '/')}
              variant="outline"
            >
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!purchase) {
    return (
      <div className="container mx-auto flex min-h-screen items-center justify-center py-8">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Purchase Not Found</CardTitle>
            <CardDescription>
              We couldn't find your purchase. Please contact support if you
              believe this is an error.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const remainingDownloads = purchase.maxDownloads - purchase.downloadCount;
  const isExpired =
    purchase.expiresAt && new Date(purchase.expiresAt) < new Date();

  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center py-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CheckCircleIcon className="mx-auto size-16 text-green-500" />
          <CardTitle className="mt-4 text-2xl">Purchase Successful!</CardTitle>
          <CardDescription>
            Thank you for purchasing NTClipboard, {purchase.customerName}!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-medium">Purchase Details:</p>
            <div className="text-sm text-muted-foreground">
              <p>Email: {purchase.email}</p>
              <p>
                Purchase Date:{' '}
                {new Date(purchase.createdAt).toLocaleDateString()}
              </p>
              <p>
                Downloads Used: {purchase.downloadCount} /{' '}
                {purchase.maxDownloads}
              </p>
              {purchase.expiresAt && (
                <p>
                  Download Link Expires:{' '}
                  {new Date(purchase.expiresAt).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>

          {isExpired ? (
            <div className="rounded-md bg-destructive/10 p-4 text-center">
              <p className="text-sm text-destructive-foreground">
                Your download link has expired. Please contact support for
                assistance.
              </p>
            </div>
          ) : remainingDownloads <= 0 ? (
            <div className="rounded-md bg-muted/80 p-4 text-center">
              <p className="text-sm text-muted-foreground">
                You have used all available downloads. Please contact support if
                you need additional downloads.
              </p>
            </div>
          ) : (
            <Button
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              size="lg"
            >
              {isDownloading ? (
                <>
                  <RefreshCcwIcon className="mr-2 size-4 animate-spin" />
                  Preparing Download...
                </>
              ) : (
                <>
                  <DownloadIcon className="mr-2 size-4" />
                  Download NTClipboard ({remainingDownloads} downloads
                  remaining)
                </>
              )}
            </Button>
          )}

          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Need help? Contact our support team at support@ntclipboard.com
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
