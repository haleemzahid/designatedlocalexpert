'use client';

import * as React from 'react';
<<<<<<< HEAD
import { useRouter } from 'next/navigation';
import { Building2, CheckCircle, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Routes } from '@/constants/routes';
import type { OnboardingData } from '@/data/onboarding/get-onboarding-data';

interface OnboardingWizardProps {
  user: OnboardingData['user'];
  organization: OnboardingData['organization'];
}

export function OnboardingWizard({
  user,
  organization
}: OnboardingWizardProps): React.JSX.Element {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState<
    'user' | 'organization' | 'complete'
  >(() => {
    if (!user.completedOnboarding) return 'user';
    if (!organization.completedOnboarding) return 'organization';
    return 'complete';
  });

  const [formData, setFormData] = React.useState({
    userName: user.name,
    userEmail: user.email || '',
    organizationName: organization.name,
    organizationDescription: ''
  });

  const handleInputChange = (field: string, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCompleteUserOnboarding = async (): Promise<void> => {
    setIsLoading(true);
    try {
      // Here you would typically call an API to update the user's onboarding status
      // For now, we'll simulate the API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!organization.completedOnboarding) {
        setCurrentStep('organization');
      } else {
        setCurrentStep('complete');
        router.push(Routes.Home);
      }
    } catch (error) {
      console.error('Failed to complete user onboarding:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCompleteOrganizationOnboarding = async (): Promise<void> => {
    setIsLoading(true);
    try {
      // Here you would typically call an API to update the organization's onboarding status
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setCurrentStep('complete');
      router.push(Routes.Home);
    } catch (error) {
      console.error('Failed to complete organization onboarding:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (currentStep === 'user') {
    return (
      <div className="container mx-auto max-w-md py-12">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <User className="size-6 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle>Welcome! Let's set up your profile</CardTitle>
            <CardDescription>
              Complete your profile information to get started
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="userName">Full Name</Label>
              <Input
                id="userName"
                value={formData.userName}
                onChange={(e) => handleInputChange('userName', e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="userEmail">Email</Label>
              <Input
                id="userEmail"
                type="email"
                value={formData.userEmail}
                onChange={(e) => handleInputChange('userEmail', e.target.value)}
                placeholder="Enter your email address"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleCompleteUserOnboarding}
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : 'Continue'}
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (currentStep === 'organization') {
    return (
      <div className="container mx-auto max-w-md py-12">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <Building2 className="size-6 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle>Set up your organization</CardTitle>
            <CardDescription>
              Tell us about your organization to complete the setup
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="organizationName">Organization Name</Label>
              <Input
                id="organizationName"
                value={formData.organizationName}
                onChange={(e) =>
                  handleInputChange('organizationName', e.target.value)
                }
                placeholder="Enter your organization name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="organizationDescription">
                Description (Optional)
              </Label>
              <Input
                id="organizationDescription"
                value={formData.organizationDescription}
                onChange={(e) =>
                  handleInputChange('organizationDescription', e.target.value)
                }
                placeholder="Briefly describe your organization"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleCompleteOrganizationOnboarding}
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Setting up...' : 'Complete Setup'}
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-md py-12">
      <Card>
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
            <CheckCircle className="size-6 text-green-600 dark:text-green-400" />
          </div>
          <CardTitle>All set!</CardTitle>
          <CardDescription>
            Your account is ready to use. Redirecting you to the dashboard...
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
=======

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
>>>>>>> f8ade40871fb3038c0782ad4330ba4f9f5dcce66
