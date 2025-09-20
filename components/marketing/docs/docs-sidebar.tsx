'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { DocsSearch } from '@/components/marketing/docs/docs-search';
import { DOCS_LINKS } from '@/components/marketing/marketing-links';
import { cn } from '@/lib/utils';

export function DocsSidebar(): React.JSX.Element {
  const pathname = usePathname();
  if (DOCS_LINKS.length === 0) {
    return <></>;
  }
  return (
    <div className="w-full space-y-4">
      <div className="mb-8 p-1">
        <DocsSearch />
      </div>
      {DOCS_LINKS.map((item, index) => (
        <div
          key={index}
          className="pb-4"
        >
          <h4 className="mb-1 flex flex-row items-center gap-2 rounded-md px-2 py-1 text-sm font-semibold">
            {item.icon}
            {item.title}
          </h4>
          {item?.items?.length && (
            <div className="grid grid-flow-row auto-rows-max text-sm">
              {item.items.map((subItem: { href?: string; title: string }, subIndex: number) =>
                subItem.href ? (
                  <Link
                    key={subIndex}
                    href={subItem.href}
                    className={cn(
                      'group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline',
                      pathname === subItem.href
                        ? 'font-medium text-foreground'
                        : 'text-muted-foreground'
                    )}
                  >
                    {subItem.title}
                  </Link>
                ) : (
                  <span
                    key={subIndex}
                    className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
                  >
                    {subItem.title}
                  </span>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
