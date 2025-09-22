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
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      image: true,
      completedOnboarding: true,
      organizationId: true
    }
  });

  if (!user) {
    return redirect(Routes.Root);
  }

  if (!user.organizationId) {
    return redirect(Routes.Root);
  }

  const organization = await prisma.organization.findUnique({
    where: {
      id: user.organizationId
    },
    select: {
      id: true,
      name: true,
      completedOnboarding: true
    }
  });

  if (!organization) {
    return redirect(Routes.Root);
  }

  return {
    user,
    organization
  };
});
