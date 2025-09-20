import * as React from 'react';
import { AlertCircleIcon, BookIcon, ScaleIcon, ShieldIcon, UserIcon, DatabaseIcon } from 'lucide-react';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import { SiteHeading } from '@/components/marketing/fragments/site-heading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DATA_CARDS = [
  {
    title: 'DLE Network Overview',
    icon: <BookIcon className="size-4 shrink-0" />,
    content:
      'The DLE Network (Designated Local Expert) operates www.designatedlocalexpert.com and is overseen by Mr. Cali, LLC as a Real Estate Network company.'
  },
  {
    title: 'Personal Information',
    icon: <UserIcon className="size-4 shrink-0" />,
    content:
      'We collect personal data including name, address, phone number, email, and identification information for identity verification and fraud prevention.'
  },
  {
    title: 'Data Protection',
    icon: <ShieldIcon className="size-4 shrink-0" />,
    content:
      'We use commercially reasonable physical, electronic, and administrative safeguards to protect your personal information.'
  },
  {
    title: 'Mobile Device Data',
    icon: <DatabaseIcon className="size-4 shrink-0" />,
    content:
      'When you use mobile devices to access our services, we collect device identifiers, location data, and usage information.'
  },
  {
    title: 'Usage Data & Analytics',
    icon: <ScaleIcon className="size-4 shrink-0" />,
    content:
      'We collect browser information, IP addresses, cookies, and analytics data to improve our services and user experience.'
  },
  {
    title: 'Your Privacy Rights',
    icon: <AlertCircleIcon className="size-4 shrink-0" />,
    content:
      'You can update account information, opt-out of marketing communications, and control cookie settings at any time.'
  }
];

const DATA_ACCORDION = [
  {
    title: 'What Information We Collect',
    content:
      'We collect Personal Information (name, address, phone, email, ID numbers) and Non-Personal Information (occupation, zip code, de-identified data). We also collect Identity Verification Data through third-party services for safety and security purposes.'
  },
  {
    title: 'Information We Automatically Collect',
    content:
      'Mobile Device Data including device IDs, location information, and carrier details. Usage Data including browser type, IP address, cookies, log files, and analytics data to help improve our services.'
  },
  {
    title: 'Sharing of Your Personal Information',
    content:
      'We share personal information only to create de-identified data, comply with legal requirements, respond to legal process, investigate illegal activities, protect against fraud, and engage in routine business operations with service providers.'
  },
  {
    title: 'How We Protect Your Information',
    content:
      'We use commercially reasonable security measures but cannot guarantee complete security. You are responsible for safeguarding passwords and controlling device access. We will notify affected individuals if security is compromised.'
  },
  {
    title: 'Commercial and Marketing Communications',
    content:
      'You cannot opt out of service-related emails but can unsubscribe from marketing communications. We may send marketing texts if you opt in, and you can opt out by replying "STOP" or contacting us.'
  },
  {
    title: 'Cookies and Interest-Based Advertising',
    content:
      'You can manage cookie preferences through browser settings. We use Google Analytics and other tracking technologies. You can opt out of interest-based advertising through various industry resources.'
  },
  {
    title: "Children's Privacy",
    content:
      'DLE Network does not knowingly collect information from children under 13. Our services are not directed at children under 13, and we will delete any such information if discovered.'
  }
];

export function PrivacyPolicy(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container space-y-16 py-8">
        <SiteHeading
          badge="Legal"
          title="Privacy Policy"
          description="DLE Network (Designated Local Expert) Privacy Policy - Learn how we collect, use, and protect your data when you use our services."
        />

        <Alert className="rounded-lg border-l-4 border-l-blue-500 bg-blue-50 dark:bg-blue-950/20">
          <AlertDescription className="text-base">
            <strong>DLE Network Overview:</strong> The DLE Network operates www.designatedlocalexpert.com and www.mrcali.com.
            We are overseen by Mr. Cali, LLC, a Real Estate Network company that understands the importance of intellectual property protection.
          </AlertDescription>
        </Alert>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DATA_CARDS.map((item, index) => (
            <Card
              key={index}
              className="border-none dark:bg-accent/40"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  {item.icon}
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Accordion
          type="single"
          collapsible
        >
          {DATA_ACCORDION.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
            >
              <AccordionTrigger className="flex items-center justify-between text-lg font-medium">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="space-y-6">
          <Card className="border-l-4 border-l-green-500 bg-green-50 dark:bg-green-950/20">
            <CardContent className="pt-6">
              <CardTitle className="text-lg text-green-700 dark:text-green-400">
                Network Protection & Confidentiality
              </CardTitle>
              <p className="text-sm leading-relaxed mt-2 text-green-800 dark:text-green-300">
                The DLE Network is governed by Mr. Cali LLC, which holds common law trademarks throughout
                the United States and Canada, plus federal and state trademarks. When we recruit members,
                we file state trademarks and create binding trademark licensing agreements. We keep all member
                and visitor information confidential and do not sell information to third-party vendors.
              </p>
            </CardContent>
          </Card>

          <div>
            <CardTitle className="text-lg text-primary mb-4">
              Contact Information
            </CardTitle>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>For questions about this Privacy Policy or any changes, please contact us:</p>
              <div className="space-y-1">
                <p>
                  Email: <a href="mailto:Info@MrCali.com" className="text-blue-500 hover:underline">Info@MrCali.com</a>
                </p>
                <p>
                  For children's privacy concerns: <a href="mailto:contact@MrCali.com" className="text-blue-500 hover:underline">contact@MrCali.com</a>
                </p>
              </div>
            </div>
          </div>

          <Card className="bg-gray-50 dark:bg-gray-900/50">
            <CardContent className="pt-6">
              <p className="text-xs text-muted-foreground">
                <strong>Last Modified:</strong> October 7th, 2019<br />
                <strong>Note:</strong> Any rights not expressly granted herein are reserved by DLE Network and Mr. Cali LLC.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </GridSection>
  );
}
