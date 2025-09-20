// @ts-nocheck
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Portal } from '@radix-ui/react-portal';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { RemoveScroll } from 'react-remove-scroll';

import { ExternalLink } from '@/components/marketing/fragments/external-link';
import { ThemeSwitcher } from '@/components/marketing/fragments/theme-switcher';
// import { DOCS_LINKS, MENU_LINKS } from '@/components/marketing/marketing-links';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import { Logo } from '@/components/ui/logo';
import { Routes } from '@/constants/routes';
import { cn } from '@/lib/utils';

export function MobileMenu({
  className,
  ...other
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element {
  const [open, setOpen] = React.useState<boolean>(false);
  const pathname = usePathname();
  const isDocs = pathname.startsWith('/docs');

  React.useEffect(() => {
    const handleRouteChangeStart = () => {
      if (document.activeElement instanceof HTMLInputElement) {
        document.activeElement.blur();
      }

      setOpen(false);
    };

    handleRouteChangeStart();
  }, [pathname]);

  const handleChange = () => {
    const mediaQueryList = window.matchMedia('(min-width: 1024px)');
    setOpen((open) => (open ? !mediaQueryList.matches : false));
  };

  React.useEffect(() => {
    handleChange();
    const mediaQueryList = window.matchMedia('(min-width: 1024px)');
    mediaQueryList.addEventListener('change', handleChange);
    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, []);

  const handleToggleMobileMenu = (): void => {
    setOpen((open) => !open);
  };

  return (
    <>
      <div
        className={cn('flex items-center justify-between', className)}
        {...other}
      >
        <Link href={Routes.Root}>
          <Logo />
        </Link>
        <Button
          variant="ghost"
          size="icon"
          aria-expanded={open}
          aria-label="Toggle Mobile Menu"
          onClick={handleToggleMobileMenu}
          className="flex aspect-square h-fit select-none flex-col items-center justify-center rounded-full"
        >
          <motion.div
            className="w-5 origin-center border-t-2 border-primary"
            initial={{ translateY: '-3px' }}
            animate={
              open
                ? { rotate: '45deg', translateY: '1px' }
                : { translateY: '-3px', rotate: '0deg' }
            }
            transition={{ bounce: 0, duration: 0.1 }}
          />
          <motion.div
            className="w-5 origin-center border-t-2 border-primary"
            transition={{ bounce: 0, duration: 0.1 }}
            initial={{ translateY: '3px' }}
            animate={
              open
                ? { rotate: '-45deg', translateY: '-1px' }
                : { translateY: '3px', rotate: '0deg', scaleX: 1 }
            }
          />
        </Button>
      </div>
      {open && (
        <Portal asChild>
          <RemoveScroll
            allowPinchZoom
            enabled
          >
            {isDocs ? (
              <DocsMobileMenu onLinkClicked={handleToggleMobileMenu} />
            ) : (
              <MainMobileMenu onLinkClicked={handleToggleMobileMenu} />
            )}
          </RemoveScroll>
        </Portal>
      )}
    </>
  );
}

type MainMobileMenuProps = {
  onLinkClicked: () => void;
};

function MainMobileMenu({
  onLinkClicked
}: MainMobileMenuProps): React.JSX.Element {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({});
  const pathname = usePathname();
  return (
    <div className="fixed inset-0 z-50 mt-[69px] overflow-y-auto bg-background animate-in fade-in-0">
      <div className="flex size-full flex-col items-start space-y-3 p-4">
        <div className="flex w-full flex-col gap-2">
          {/* Auth buttons removed */}
        </div>
        <ul className="w-full">
          <li className="py-2">
            <Link
              href={Routes.Root}
              onClick={onLinkClicked}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'w-full justify-start text-base font-normal',
                pathname === '/' && 'bg-accent'
              )}
            >
              Home
            </Link>
          </li>
        </ul>
        <div className="flex w-full items-center justify-between gap-2 border-y border-border/40 p-4">
          <div className="text-base font-medium">Theme</div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}

type DocsMobileMenuProps = {
  onLinkClicked: () => void;
};

function DocsMobileMenu({
  onLinkClicked
}: DocsMobileMenuProps): React.JSX.Element {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({});
  return (
    <div className="fixed inset-0 z-50 mt-[69px] overflow-y-auto bg-background animate-in fade-in-0">
      <div className="flex size-full flex-col items-start space-y-3 p-4">
        <ul className="w-full">
          {/* No docs links for simplified version */}
        </ul>
        <div className="flex w-full items-center justify-between gap-2 border-y border-border/40 p-4">
          <div className="text-base font-medium">Theme</div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
