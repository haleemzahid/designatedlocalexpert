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
    select: {
      id: true,
      name: true,
      email: true,
      completedOnboarding: true,
      organizationId: true
    }
  });

  if (!user) {
    throw new Error('User not found');
  }

  if (!user.organizationId) {
    throw new Error('User has no organization');
  }

  const organization = await prisma.organization.findUnique({
    where: { id: user.organizationId },
    select: {
      id: true,
      name: true,
      completedOnboarding: true
    }
  });

  if (!organization) {
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
