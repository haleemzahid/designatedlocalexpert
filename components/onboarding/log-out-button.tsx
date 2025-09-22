'use client';

import * as React from 'react';
import { LogOut } from 'lucide-react';
<<<<<<< HEAD

import { Button } from '@/components/ui/button';

export function LogOutButton(): React.JSX.Element {
  const handleLogOut = (): void => {
    // Use window location to redirect to logout endpoint
    window.location.href = '/api/auth/signout';
=======
import { signOut } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LogOutButtonProps {
  className?: string;
}

export function LogOutButton({ className }: LogOutButtonProps): React.JSX.Element {
  const handleSignOut = async () => {
    await signOut({
      callbackUrl: '/'
    });
>>>>>>> f8ade40871fb3038c0782ad4330ba4f9f5dcce66
  };

  return (
    <Button
      variant="outline"
      size="sm"
<<<<<<< HEAD
      onClick={handleLogOut}
      className="gap-2"
    >
      <LogOut className="size-4" />
      Log out
    </Button>
  );
}
=======
      onClick={handleSignOut}
      className={cn('gap-2', className)}
    >
      <LogOut className="h-4 w-4" />
      Sign Out
    </Button>
  );
}
>>>>>>> f8ade40871fb3038c0782ad4330ba4f9f5dcce66
