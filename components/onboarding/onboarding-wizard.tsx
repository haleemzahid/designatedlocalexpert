'use client';

import * as React from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface OnboardingWizardProps {
  user: {
    id: string;
    name: string | null;
    email: string | null;
    phone: string | null;
    image: string | null;
    completedOnboarding: boolean;
    organizationId: string | null;
  };
  organization: {
    id: string;
    name: string;
    completedOnboarding: boolean;
  };
}

export function OnboardingWizard({ user, organization }: OnboardingWizardProps): React.JSX.Element {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center py-12">
      <div className="mx-auto max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome!</h1>
          <p className="mt-2 text-muted-foreground">
            Let's get you set up with your account.
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Onboarding Status</CardTitle>
            <CardDescription>
              Complete your setup to get started
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm">
                <strong>User:</strong> {user.name || user.email}
              </p>
              <p className="text-sm">
                User onboarding: {user.completedOnboarding ? '✅ Complete' : '⏳ Pending'}
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm">
                <strong>Organization:</strong> {organization.name}
              </p>
              <p className="text-sm">
                Organization onboarding: {organization.completedOnboarding ? '✅ Complete' : '⏳ Pending'}
              </p>
            </div>
            
            {(!user.completedOnboarding || !organization.completedOnboarding) && (
              <div className="mt-4 rounded-md bg-yellow-50 p-4 dark:bg-yellow-950/20">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  Please complete your onboarding setup to continue.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}