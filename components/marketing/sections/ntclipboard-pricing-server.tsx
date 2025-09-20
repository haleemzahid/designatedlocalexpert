import * as React from 'react';
import { CheckIcon, StarIcon } from 'lucide-react';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import { SiteHeading } from '@/components/marketing/fragments/site-heading';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { getNTClipboardPricing } from '@/lib/billing/get-ntclipboard-pricing';

import { PurchaseForm } from './purchase-form';

const features = [
  'Complete NTClipboard Desktop Application',
  'Smart PDF Data Extraction',
  'Windows Clipboard Integration',
  'Keyboard Shortcuts (ESC, TAB, `)',
  'Lifetime Updates',
  'No Monthly Fees Ever',
  'Works Offline'
];

export async function NTClipboardPricing(): Promise<React.JSX.Element> {
  const pricing = await getNTClipboardPricing();

  // Fallback pricing if Stripe data is not available
  const displayPrice = pricing?.formattedPrice || '$49';
  const numericPrice = pricing ? pricing.amount / 100 : 49;

  return (
    <GridSection hideVerticalGridLines>
      <div
        className="container py-24 md:py-32"
        id="NTClipboardPricing"
      >
        <SiteHeading
          badge="Pricing"
          title="Simple, One-Time Pricing"
          description="No subscriptions, no recurring fees. Pay once, use forever."
        />
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 opacity-20 blur-xl" />
            <div className="relative rounded-3xl border-2 border-orange-200 bg-white p-8 shadow-2xl dark:border-orange-800 dark:bg-slate-900">
              <div className="text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 px-4 py-2 text-sm font-medium text-orange-800 dark:from-orange-900/30 dark:to-red-900/30 dark:text-orange-200">
                  <StarIcon className="size-4" />
                  Limited Time Offer
                </div>
                <div className="mb-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-6xl font-bold text-transparent">
                  {displayPrice}
                </div>
                <p className="mb-8 text-muted-foreground">
                  One-time payment • Lifetime license
                </p>

                <div className="mb-8 space-y-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                        <CheckIcon className="size-3 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="mb-4 w-full bg-gradient-to-r from-orange-500 to-red-500 py-4 text-lg font-bold text-white hover:from-orange-600 hover:to-red-600"
                    >
                      Get NTClipboard Now - {displayPrice}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Purchase NTClipboard</DialogTitle>
                    </DialogHeader>
                    <PurchaseForm />
                  </DialogContent>
                </Dialog>

                <p className="text-sm text-muted-foreground">
                  💳 Secure payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
