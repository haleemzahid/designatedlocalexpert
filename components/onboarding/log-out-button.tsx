'use client';

import * as React from 'react';
import { LogOut } from 'lucide-react';
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
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleSignOut}
      className={cn('gap-2', className)}
    >
      <LogOut className="h-4 w-4" />
      Sign Out
    </Button>
  );
}