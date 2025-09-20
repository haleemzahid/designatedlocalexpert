import * as React from 'react'; import * as React from 'react'; import * as React from 'react'; import * as React from 'react';

import { MonitorIcon } from 'lucide-react';

import { FacebookIcon, InstagramIcon, LinkedInIcon, TikTokIcon, XIcon } from '@/components/ui/brand-icons'; import {

import { Routes } from '@/constants/routes';

  MonitorIconimport {
  import {

export const MENU_LINKS = [

      {} from 'lucide-react';

      title: 'Home',

      description: 'Return to homepage', MonitorIcon  MonitorIcon

    icon: <MonitorIcon className="size-5 shrink-0" />,

      href: Routes.Root,import {

        external: false

      }  FacebookIcon,} from 'lucide-react';} from 'lucide-react';

];

InstagramIcon,

export const FOOTER_LINKS = [

  {
    LinkedInIcon,

    title: 'Product',

    items: [TikTokIcon,

      { title: 'NTClipboard', href: Routes.Root }

    ]  XIconimport {
      import {

      }

];} from '@/components/ui/brand-icons';



export const SOCIAL_LINKS = [import { Routes } from '@/constants/routes'; FacebookIcon, FacebookIcon,

  { name: 'X', href: '#', icon: <XIcon className="size-4 shrink-0" /> },

  { name: 'LinkedIn', href: '#', icon: <LinkedInIcon className="size-4 shrink-0" /> },

  { name: 'Facebook', href: '#', icon: <FacebookIcon className="size-4 shrink-0" /> },

  { name: 'Instagram', href: '#', icon: <InstagramIcon className="size-4 shrink-0" /> },export const MENU_LINKS = [InstagramIcon, InstagramIcon,

    { name: 'TikTok', href: '#', icon: <TikTokIcon className="size-4 shrink-0" /> }

  ]; {



  export const DOCS_LINKS: any[] = []; title: 'Home', LinkedInIcon, LinkedInIcon,

    description: 'Return to homepage',

      icon: <MonitorIcon className="size-5 shrink-0" />, TikTokIcon, TikTokIcon,

        href: Routes.Root,

          external: false  XIcon  XIcon

}

];} from '@/components/ui/brand-icons';} from '@/components/ui/brand-icons';



export const FOOTER_LINKS = [import { Routes } from '@/constants/routes'; import { Routes } from '@/constants/routes';

{

  title: 'Product',

    items: [

      { title: 'NTClipboard', href: Routes.Root }export const MENU_LINKS = [export const MENU_LINKS = [

      ]

} {
  {

];

    title: 'Home', title: 'Home',

export const SOCIAL_LINKS = [

      {
        description: 'Return to homepage', description: 'Return to homepage',

        name: 'X',

        href: '#', icon: <MonitorIcon className="size-5 shrink-0" />, icon: <MonitorIcon className="size-5 shrink-0" />,

        icon: <XIcon className="size-4 shrink-0" />

      }, href: Routes.Root, href: Routes.Root,

      {

        name: 'LinkedIn', external: false    external: false

    href: '#',

        icon: <LinkedInIcon className="size-4 shrink-0" />
      }  }

},

{]; href: Routes.About,

  name: 'Facebook',

    href: '#', external: false

  icon: <FacebookIcon className="size-4 shrink-0" />

}, export const FOOTER_LINKS = [  }

{

  name: 'Instagram', {  // {

    href: '#',

    icon: <InstagramIcon className="size-4 shrink-0" />    title: 'Product',  //   title: 'Resources',

  },

  {
    items: [  //   items: [

      name: 'TikTok',

      href: '#', { title: 'NTClipboard', href: Routes.Root }  //     {

    icon: <TikTokIcon className="size-4 shrink-0" />

  }    ]  //       title: 'Contact',

];

}  //       description: 'Reach out for assistance',

export const DOCS_LINKS: any[] = [];
];  //       icon: <PaperPlaneIcon className="size-5 shrink-0" />,

//       href: Routes.Contact,

export const SOCIAL_LINKS = [  //       external: false

  {  //     },

    name: 'X',  //     {

    href: '#',  //       title: 'Roadmap',

    icon: <XIcon className="size-4 shrink-0" />  //       description: 'See what is coming next',

  },  //       icon: <MapIcon className="size-5 shrink-0" />,

  {  //       href: Routes.Roadmap,

    name: 'LinkedIn',  //       external: true

    href: '#',  //     },

    icon: <LinkedInIcon className="size-4 shrink-0" />  //     {

  },  //       title: 'Docs',

  {  //       description: 'Learn how to use our platform',

    name: 'Facebook',  //       icon: <BookOpenIcon className="size-5 shrink-0" />,

    href: '#',  //       href: Routes.Docs,

    icon: <FacebookIcon className="size-4 shrink-0" />  //       external: false

  },  //     }

  {  //   ]

    name: 'Instagram',  // },

    href: '#',  // {

    icon: <InstagramIcon className="size-4 shrink-0" />  // title: 'Pricing',

  },  // href: Routes.Pricing,

  {  // external: false

    name: 'TikTok',  // },

    href: '#',  // {

    icon: <TikTokIcon className="size-4 shrink-0" />  //   title: 'Blog',

  }  //   href: Routes.Blog,

];  //   external: false

// },

export const DOCS_LINKS = [];  // {
  //   title: 'Story',
  //   href: Routes.Story,
  //   external: false
  // }
];

export const FOOTER_LINKS: Array<{
  title: string;
  links: Array<{
    name: string;
    href: string;
    external: boolean;
  }>;
}> = [];

export const SOCIAL_LINKS = [
  {
    name: 'X (formerly Twitter)',
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
