'use client';

import * as React from 'react';
import { LogOut } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function LogOutButton(): React.JSX.Element {
  const handleLogOut = (): void => {
    // Use window location to redirect to logout endpoint
    window.location.href = '/api/auth/signout';
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleLogOut}
      className="gap-2"
    >
      <LogOut className="size-4" />
      Log out
    </Button>
  );
}
