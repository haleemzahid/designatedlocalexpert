import * as React from 'react';
import type { Metadata } from 'next';

import { TermsOfService } from '@/components/marketing/sections/terms-of-service';

export const metadata: Metadata = {
    title: 'Terms of Service | DLE Network',
    description: 'DLE Network Terms of Service - Review our comprehensive terms and conditions that govern the use of our SEO, branding, and marketing services for local businesses.',
    keywords: 'terms of service, terms and conditions, DLE Network, Designated Local Expert, legal agreement, service terms, membership agreement',
    openGraph: {
        title: 'Terms of Service | DLE Network',
        description: 'Review DLE Network Terms of Service governing our SEO, branding, and marketing services for local businesses.',
        type: 'website'
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function TermsOfServicePage(): React.JSX.Element {
    return <TermsOfService />;
}