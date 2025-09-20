'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ExternalLink } from '@/components/marketing/fragments/external-link';
// import { MENU_LINKS } from '@/components/marketing/marketing-links';
import { MobileMenu } from '@/components/marketing/mobile-menu';
import { buttonVariants } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Routes } from '@/constants/routes';
import { cn } from '@/lib/utils';

export function Navbar(): React.JSX.Element {
  const pathname = usePathname();
  return (
    <section className="sticky inset-x-0 top-0 z-40 w-full border-b bg-background">
      <div className="w-full px-6 py-2">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-x-9">
            <Link
              href={Routes.Root}
              className="flex items-center gap-2"
            >
              <Logo hideWordmark />
            </Link>
            <div className="flex items-center">
              <NavigationMenu
                style={
                  {
                    ['--radius']: '1rem'
                  } as React.CSSProperties
                }
              >
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      active={pathname === '/'}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'rounded-xl text-[15px] font-normal data-[active]:bg-accent'
                      )}
                    >
                      <Link href={Routes.Root}>Home</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      active={pathname === Routes.PrivacyPolicy}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'rounded-xl text-[15px] font-normal data-[active]:bg-accent'
                      )}
                    >
                      <Link href={Routes.PrivacyPolicy}>Privacy Policy</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      active={pathname === Routes.TermsOfService}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'rounded-xl text-[15px] font-normal data-[active]:bg-accent'
                      )}
                    >
                      <Link href={Routes.TermsOfService}>Terms of Service</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle className="rounded-xl border-none shadow-none" />
          </div>
        </nav>
        <MobileMenu className="lg:hidden" />
      </div>
    </section>
  );
}
