<<<<<<< HEAD
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/db/prisma';

export type OnboardingData = {
  user: {
    id: string;
    name: string;
    email: string | null;
    completedOnboarding: boolean;
  };
  organization: {
    id: string;
    name: string;
    completedOnboarding: boolean;
  };
};

export async function getOnboardingData(): Promise<OnboardingData> {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error('User not authenticated');
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
=======
import { cache } from 'react';
import { redirect } from 'next/navigation';

import { Routes } from '@/constants/routes';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/db/prisma';

export const getOnboardingData = cache(async () => {
  const session = await auth();

  if (!session?.user) {
    return redirect(Routes.Root);
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id!
    },
>>>>>>> f8ade40871fb3038c0782ad4330ba4f9f5dcce66
    select: {
      id: true,
      name: true,
      email: true,
<<<<<<< HEAD
=======
      phone: true,
      image: true,
>>>>>>> f8ade40871fb3038c0782ad4330ba4f9f5dcce66
      completedOnboarding: true,
      organizationId: true
    }
  });

  if (!user) {
<<<<<<< HEAD
    throw new Error('User not found');
  }

  if (!user.organizationId) {
    throw new Error('User has no organization');
  }

  const organization = await prisma.organization.findUnique({
    where: { id: user.organizationId },
=======
    return redirect(Routes.Root);
  }

  if (!user.organizationId) {
    return redirect(Routes.Root);
  }

  const organization = await prisma.organization.findUnique({
    where: {
      id: user.organizationId
    },
>>>>>>> f8ade40871fb3038c0782ad4330ba4f9f5dcce66
    select: {
      id: true,
      name: true,
      completedOnboarding: true
    }
  });

  if (!organization) {
<<<<<<< HEAD
    throw new Error('Organization not found');
  }

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      completedOnboarding: user.completedOnboarding
    },
    organization: {
      id: organization.id,
      name: organization.name,
      completedOnboarding: organization.completedOnboarding
    }
  };
}
=======
    return redirect(Routes.Root);
  }

  return {
    user,
    organization
  };
});
>>>>>>> f8ade40871fb3038c0782ad4330ba4f9f5dcce66
