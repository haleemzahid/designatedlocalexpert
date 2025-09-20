import * as React from 'react';
import {
    FileTextIcon,
    UserIcon,
    CreditCardIcon,
    ShieldIcon,
    AlertTriangleIcon,
    ScaleIcon,
    BookOpenIcon,
    ContactIcon,
    ClockIcon,
    GavelIcon
} from 'lucide-react';

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

const OVERVIEW_CARDS = [
    {
        title: 'Service Agreement',
        icon: <FileTextIcon className="size-4 shrink-0" />,
        content:
            'By accessing or using DLE Network services, you agree to be bound by these Terms of Service and all applicable laws and regulations.'
    },
    {
        title: 'Service Description',
        icon: <BookOpenIcon className="size-4 shrink-0" />,
        content:
            'DLE Network provides SEO services, local listing optimization, branding solutions, and marketing consulting for local businesses and professionals.'
    },
    {
        title: 'Membership Benefits',
        icon: <UserIcon className="size-4 shrink-0" />,
        content:
            'Members receive exclusive territory rights, branded marketing materials, ongoing support, and access to our proprietary business development tools.'
    },
    {
        title: 'Payment Terms',
        icon: <CreditCardIcon className="size-4 shrink-0" />,
        content:
            'Subscription fees are billed monthly or annually in advance. Late payments may result in service suspension or termination.'
    },
    {
        title: 'Intellectual Property',
        icon: <ShieldIcon className="size-4 shrink-0" />,
        content:
            'DLE Network retains ownership of all trademarks, logos, and proprietary content. Licensed use is granted to active members only.'
    },
    {
        title: 'Liability Limits',
        icon: <AlertTriangleIcon className="size-4 shrink-0" />,
        content:
            'Our liability is limited to the amount paid for services. We do not guarantee specific marketing results or business outcomes.'
    }
];

const TERMS_ACCORDION = [
    {
        title: '1. Agreement to Terms',
        content: (
            <div className="space-y-4">
                <p>
                    These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User,&quot; &quot;Client,&quot; &quot;Member,&quot; or &quot;you&quot;) and DLE Network, a division of Mr. Cali, LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                </p>
                <p>
                    <strong>Effective Date:</strong> January 1, 2025
                </p>
                <p>
                    By accessing, browsing, or using www.designatedlocalexpert.com or any related services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
                </p>
                <p>
                    If you do not agree to these Terms, you must not access or use our services.
                </p>
            </div>
        )
    },
    {
        title: '2. Definitions',
        content: (
            <div className="space-y-4">
                <div>
                    <strong>&quot;Service&quot;</strong> means the DLE Network platform, website, marketing services, SEO optimization, local listing management, branding solutions, and related consulting services.
                </div>
                <div>
                    <strong>&quot;User&quot; or &quot;Client&quot;</strong> refers to any individual or entity accessing or using our services.
                </div>
                <div>
                    <strong>&quot;Member&quot;</strong> refers to users who have entered into a paid subscription agreement for exclusive territory rights.
                </div>
                <div>
                    <strong>&quot;DLE Network&quot;</strong> and &quot;Designated Local Expert&quot; are registered trademarks of Mr. Cali, LLC.
                </div>
                <div>
                    <strong>&quot;Content&quot;</strong> includes all text, graphics, logos, images, software, and other materials on our platform.
                </div>
            </div>
        )
    },
    {
        title: '3. Services Provided',
        content: (
            <div className="space-y-4">
                <p>DLE Network provides the following services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>SEO Optimization:</strong> Search engine optimization for local businesses and professionals</li>
                    <li><strong>Local Listing Management:</strong> Google Business Profile optimization and local directory management</li>
                    <li><strong>Branding Solutions:</strong> Custom branded marketing materials and online presence development</li>
                    <li><strong>Territory Exclusivity:</strong> Exclusive rights to represent DLE Network in specific geographic areas (for Members)</li>
                    <li><strong>Marketing Consultation:</strong> Strategic advice and ongoing support for business development</li>
                </ul>
                <p>
                    <strong>Service Limitations:</strong> Services are provided on a best-effort basis. Deliverables and timelines are specified in individual service agreements. Results may vary based on market conditions, competition, and client cooperation.
                </p>
            </div>
        )
    },
    {
        title: '4. Membership and Territory Rights',
        content: (
            <div className="space-y-4">
                <p>
                    <strong>Exclusivity:</strong> DLE Network operates on a territory-exclusive basis. Only one Member is permitted per designated geographic area (city, region, or market area as defined in the membership agreement).
                </p>
                <p>
                    <strong>Membership Approval:</strong> All memberships are subject to approval based on qualifications, territory availability, and compliance with our standards.
                </p>
                <p>
                    <strong>Territory Maintenance:</strong> Members must maintain active status through timely payments and adherence to brand standards to retain territorial exclusivity.
                </p>
                <p>
                    <strong>Trademark License:</strong> Active Members receive a limited, non-transferable license to use DLE Network trademarks and branding materials within their designated territory for approved marketing activities.
                </p>
            </div>
        )
    },
    {
        title: '5. Pricing and Payment Terms',
        content: (
            <div className="space-y-4">
                <p>
                    <strong>Subscription Fees:</strong> Membership fees are billed monthly or annually in advance as specified in your service agreement.
                </p>
                <p>
                    <strong>Payment Due:</strong> Payments are due on the date specified in your invoice. Late payments incur a 1.5% monthly service charge.
                </p>
                <p>
                    <strong>Renewal:</strong> Memberships automatically renew unless cancelled with 30 days written notice before the renewal date.
                </p>
                <p>
                    <strong>Refund Policy:</strong> Fees are non-refundable except as required by law. Service credits may be provided for documented service failures.
                </p>
                <p>
                    <strong>Suspension for Non-Payment:</strong> Services may be suspended after 15 days of non-payment. Accounts may be terminated after 30 days of delinquency.
                </p>
            </div>
        )
    },
    {
        title: '6. Intellectual Property Rights',
        content: (
            <div className="space-y-4">
                <p>
                    <strong>Ownership:</strong> DLE Network, Designated Local Expert, and related trademarks, logos, and content are owned by Mr. Cali, LLC.
                </p>
                <p>
                    <strong>License Grant:</strong> Active Members receive a limited, revocable license to use approved branding materials solely for authorized marketing purposes within their territory.
                </p>
                <p>
                    <strong>Content Creation:</strong> Any content created collaboratively remains the property of DLE Network unless otherwise specified in writing.
                </p>
                <p>
                    <strong>Termination:</strong> Upon termination, all rights to use DLE Network intellectual property immediately cease, and all materials must be removed from use.
                </p>
            </div>
        )
    },
    {
        title: '7. User Responsibilities and Obligations',
        content: (
            <div className="space-y-4">
                <p>Users and Members agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete information for account setup and maintenance</li>
                    <li>Grant necessary permissions and access for service delivery</li>
                    <li>Cooperate promptly with our team for effective service implementation</li>
                    <li>Maintain professional standards in all communications and marketing activities</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Use services only for legitimate business purposes</li>
                </ul>
                <p>
                    <strong>Prohibited Actions:</strong> Users may not engage in fraudulent activities, misrepresent services, violate intellectual property rights, or use services for illegal purposes.
                </p>
            </div>
        )
    },
    {
        title: '8. Termination and Suspension',
        content: (
            <div className="space-y-4">
                <p>
                    <strong>Termination by User:</strong> You may terminate services with 30 days written notice. No refund of prepaid fees.
                </p>
                <p>
                    <strong>Termination by DLE Network:</strong> We may terminate services immediately for:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Non-payment after 30 days</li>
                    <li>Violation of these Terms</li>
                    <li>Fraudulent or illegal activity</li>
                    <li>Damage to DLE Network reputation or brand</li>
                </ul>
                <p>
                    <strong>Effect of Termination:</strong> Upon termination, access to services ceases, intellectual property licenses are revoked, and all confidential information must be returned or destroyed.
                </p>
            </div>
        )
    },
    {
        title: '9. Disclaimers and No Guarantees',
        content: (
            <div className="space-y-4">
                <Alert>
                    <AlertTriangleIcon className="h-4 w-4" />
                    <AlertDescription>
                        <strong>Important Notice:</strong> Marketing and SEO results cannot be guaranteed and may vary significantly.
                    </AlertDescription>
                </Alert>
                <p>
                    <strong>No Guarantee of Results:</strong> While we use proven strategies and best practices, we cannot guarantee specific rankings, traffic increases, lead generation, or business outcomes.
                </p>
                <p>
                    <strong>External Factors:</strong> Results depend on factors beyond our control including market competition, algorithm changes, economic conditions, and client industry dynamics.
                </p>
                <p>
                    <strong>Performance Variations:</strong> Individual results may vary based on market conditions, client participation, and implementation timeline.
                </p>
            </div>
        )
    },
    {
        title: '10. Limitation of Liability',
        content: (
            <div className="space-y-4">
                <p>
                    <strong>Liability Cap:</strong> Our total liability for any claims is limited to the amount paid by you for services in the 12 months preceding the claim.
                </p>
                <p>
                    <strong>Excluded Damages:</strong> We are not liable for indirect, consequential, punitive, or incidental damages including lost profits, business interruption, or reputational harm.
                </p>
                <p>
                    <strong>Indemnification:</strong> You agree to indemnify DLE Network against claims arising from your use of services, violation of Terms, or infringement of third-party rights.
                </p>
                <p>
                    <strong>Force Majeure:</strong> We are not liable for delays or failures due to circumstances beyond our reasonable control.
                </p>
            </div>
        )
    },
    {
        title: '11. Privacy and Data Usage',
        content: (
            <div className="space-y-4">
                <p>
                    Your privacy is important to us. Our collection, use, and protection of personal information is governed by our Privacy Policy.
                </p>
                <p>
                    <strong>Data Collection:</strong> We collect information necessary to provide services, including contact details, business information, and website analytics.
                </p>
                <p>
                    <strong>Data Sharing:</strong> We do not sell personal information. Data may be shared with service providers or as required by law.
                </p>
                <p>
                    <strong>Data Security:</strong> We implement reasonable security measures to protect your information, though no system is completely secure.
                </p>
                <p>
                    For complete details, please review our <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</a>.
                </p>
            </div>
        )
    },
    {
        title: '12. Governing Law and Jurisdiction',
        content: (
            <div className="space-y-4">
                <p>
                    <strong>Governing Law:</strong> These Terms are governed by the laws of the State of California, United States, without regard to conflict of law principles.
                </p>
                <p>
                    <strong>Jurisdiction:</strong> Any disputes arising under these Terms shall be resolved in the state or federal courts located in Los Angeles County, California.
                </p>
                <p>
                    <strong>Dispute Resolution:</strong> Before initiating litigation, parties agree to attempt resolution through good faith negotiation for 30 days.
                </p>
                <p>
                    <strong>Class Action Waiver:</strong> You agree to resolve disputes individually and waive any right to participate in class action lawsuits.
                </p>
            </div>
        )
    },
    {
        title: '13. Changes to Terms',
        content: (
            <div className="space-y-4">
                <p>
                    <strong>Modification Rights:</strong> DLE Network reserves the right to modify these Terms at any time with reasonable notice.
                </p>
                <p>
                    <strong>Notice Method:</strong> Changes will be posted on our website and emailed to active users at least 30 days before taking effect.
                </p>
                <p>
                    <strong>Continued Use:</strong> Your continued use of services after changes take effect constitutes acceptance of the modified Terms.
                </p>
                <p>
                    <strong>Rejection of Changes:</strong> If you do not agree to modified Terms, you may terminate your account before the changes take effect.
                </p>
            </div>
        )
    }
];

export function TermsOfService(): React.JSX.Element {
    return (
        <GridSection>
            <div className="container space-y-16 py-8">
                <SiteHeading
                    badge="Legal"
                    title="Terms of Service"
                    description="DLE Network Terms of Service - Please review these terms carefully as they govern your use of our services and outline the rights and responsibilities of all parties."
                />

                {/* Last Updated Alert */}
                <Alert>
                    <ClockIcon className="h-4 w-4" />
                    <AlertDescription>
                        <strong>Last Updated:</strong> January 1, 2025 | <strong>Effective Date:</strong> January 1, 2025
                    </AlertDescription>
                </Alert>

                {/* Overview Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {OVERVIEW_CARDS.map((card, index) => (
                        <Card key={index} className="h-full">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    {card.icon}
                                    {card.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {card.content}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Detailed Terms Accordion */}
                <div className="mx-auto max-w-4xl">
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold tracking-tight">Detailed Terms and Conditions</h2>
                        <p className="text-muted-foreground mt-2">
                            Complete terms governing your relationship with DLE Network
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {TERMS_ACCORDION.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                                <AccordionTrigger className="text-left hover:no-underline py-4">
                                    <span className="font-semibold">{item.title}</span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-6 text-sm leading-relaxed">
                                    {typeof item.content === 'string' ? (
                                        <p>{item.content}</p>
                                    ) : (
                                        item.content
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Contact Information */}
                <Card className="mx-auto max-w-2xl">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <ContactIcon className="size-5" />
                            Contact Information
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h3 className="font-semibold mb-2">DLE Network</h3>
                            <p className="text-sm text-muted-foreground">
                                A division of Mr. Cali, LLC<br />
                                Legal Notices and Correspondence:<br />
                                Email: <a href="mailto:legal@designatedlocalexpert.com" className="text-blue-600 hover:text-blue-800">legal@designatedlocalexpert.com</a><br />
                                Phone: <a href="tel:+1-800-555-0123" className="text-blue-600 hover:text-blue-800">1-800-555-0123</a><br />
                                Website: <a href="https://designatedlocalexpert.com" className="text-blue-600 hover:text-blue-800">www.designatedlocalexpert.com</a>
                            </p>
                        </div>
                        <Alert>
                            <GavelIcon className="h-4 w-4" />
                            <AlertDescription>
                                For legal notices, please use the email address above and allow 5-7 business days for response.
                                All legal communications must be in writing.
                            </AlertDescription>
                        </Alert>
                    </CardContent>
                </Card>

                {/* Additional Legal Notice */}
                <div className="mx-auto max-w-4xl text-center text-sm text-muted-foreground space-y-2">
                    <p>
                        These Terms of Service constitute the entire agreement between you and DLE Network regarding the use of our services.
                    </p>
                    <p>
                        If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.
                    </p>
                </div>
            </div>
        </GridSection>
    );
}