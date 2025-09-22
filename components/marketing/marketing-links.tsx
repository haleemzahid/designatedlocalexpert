import * as React from 'react';
import { BookIcon, PackageIcon } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedInIcon, TikTokIcon, XIcon } from '@/components/ui/brand-icons';
import { Routes } from '@/constants/routes';

export const MENU_LINKS = [
  {
    title: 'Home',
    description: 'Return to homepage',
    href: Routes.Root,
    external: false
  }
];

export const FOOTER_LINKS = [
  {
    title: 'Product',
    items: [
      { title: 'NTClipboard', href: Routes.Root }
    ]
  }
];

export const SOCIAL_LINKS = [
  {
    name: 'X',
    href: '#',
    icon: <XIcon className="size-4 shrink-0" />
  },
  {
    name: 'LinkedIn', 
    href: '#',
    icon: <LinkedInIcon className="size-4 shrink-0" />
  },
  {
    name: 'Facebook',
    href: '#', 
    icon: <FacebookIcon className="size-4 shrink-0" />
  },
  {
    name: 'Instagram',
    href: '#',
    icon: <InstagramIcon className="size-4 shrink-0" />
  },
  {
    name: 'TikTok',
    href: '#',
    icon: <TikTokIcon className="size-4 shrink-0" />
  }
];

export const DOCS_LINKS = [
  {
    title: 'Getting Started',
    icon: <PackageIcon className="size-4 shrink-0 text-muted-foreground" />,
    items: [
      {
        title: 'Introduction',
        href: '/docs',
        items: []
      },
      {
        title: 'Dependencies',
        href: '/docs/dependencies',
        items: []
      }
    ]
  },
  {
    title: 'Guides',
    icon: <BookIcon className="size-4 shrink-0 text-muted-foreground" />,
    items: [
      {
        title: 'Using MDX',
        href: '/docs/using-mdx',
        items: []
      }
    ]
  }
];