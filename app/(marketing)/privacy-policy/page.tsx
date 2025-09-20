import * as React from 'react';
import type { Metadata } from 'next';

import { PrivacyPolicy } from '@/components/marketing/sections/privacy-policy';

export const metadata: Metadata = {
    title: 'Privacy Policy | DLE Network',
    description: 'Learn how DLE Network (Designated Local Expert) collects, uses, and protects your personal data. Our comprehensive privacy policy explains our data practices and your rights.',
    keywords: 'privacy policy, data protection, DLE Network, Designated Local Expert, personal information, data security',
    openGraph: {
        title: 'Privacy Policy | DLE Network',
        description: 'Learn how DLE Network (Designated Local Expert) collects, uses, and protects your personal data.',
        type: 'website'
    }
};

export default function PrivacyPolicyPage(): React.JSX.Element {
    return <PrivacyPolicy />;
}