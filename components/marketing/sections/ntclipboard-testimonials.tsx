import * as React from 'react';
import { QuoteIcon, StarIcon } from 'lucide-react';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import { SiteHeading } from '@/components/marketing/fragments/site-heading';

const testimonials = [
    {
        name: 'Frank Spencer',
        role: 'Production Director',
        company: 'Mr. Manufacturing Solutions',
        location: 'Detroit, MI',
        quote:
            'I have been in manufacturing since 1993. And during this time I have worked with many traditional software companies, all of whom over promise and under deliver. EDGEBIC is different. Their singular focus is building your production efficiency, not theirs. When their systems work, they put the pedal to the floor and press on. When required, they pivot quickly to adapt and adjust. Their singular goal is to keep their clients at the top of the ever-changing manufacturing landscape. I love this company and will be a partner for life.',
        image: '/testimonials/frank-spencer.jpg',
        rating: 5
    },
    {
        name: 'George Ozburn',
        role: 'Plant Manager',
        company: 'Advanced Manufacturing Inc.',
        location: 'Phoenix, AZ',
        quote:
            'Being partnered with EDGEBIC transformed my manufacturing operations. The RMDB system provided the solid scheduling foundation I needed to establish myself as an industry leader, optimize production, and be found by customers online. Embracing this solution boosts my confidence and sparks conversations about manufacturing excellence. EDGEBIC\'s technology is a game changer, elevating my operations and business to new heights.',
        image: '/testimonials/george-ozburn.jpg',
        rating: 5
    },
    {
        name: 'Holli Reese',
        role: 'Operations Manager',
        company: 'Precision Manufacturing Co.',
        location: 'Charlotte, NC',
        quote:
            'This is the real deal! I got two major efficiency improvements from the EDGEBIC scheduling system from being found through their optimization strategies. Thank you EDGEBIC for my operational transformation!!! Absolutely thrilled with how our production flows came out with Ms. Charlotte precision😊 I wake up excited every day! My newest production milestone that went live today! EDGEBIC is changing manufacturing operations one company at a time!!! Let\'s GO‼️🔥🔥🔥',
        image: '/testimonials/holli-reese.jpg',
        rating: 5
    },
    {
        name: 'Lina C',
        role: 'Manufacturing Director',
        company: 'Elite Production Systems',
        location: 'Los Angeles, CA',
        quote:
            'Establishing our manufacturing efficiency in a competitive market is difficult, especially with 4,600 manufacturing companies in our area. To break into this market and stand out, I deployed EDGEBIC\'s production optimization strategies. I started with their scheduling optimization that resulted in 2 major efficiency improvements and the identification of cost savings that I implemented within 3 weeks of the optimization campaign. What I also found interesting is that our customers remember us for our efficiency and called us the go-to manufacturing partner from beginning to end.',
        image: '/testimonials/lina-c.jpg',
        rating: 5
    },
    {
        name: 'Brianna L',
        role: 'Operations Team Lead',
        company: 'Innovative Manufacturing Solutions',
        location: 'Austin, TX',
        quote:
            'My team and I have done well building our business on referrals, although that has often meant managing production quite a distance from our home facility. Our goal was to centralize our operations closer to home. The local optimization and training showed us a clear path to gaining more local market share.',
        image: '/testimonials/brianna-l.jpg',
        rating: 5
    }
];

const logos = [
    { name: 'Manufacturing Excellence Award', image: '/logos/award1.svg' },
    { name: 'Industry Leader 2024', image: '/logos/award2.svg' },
    { name: 'Best Production Software', image: '/logos/award3.svg' },
    { name: 'Customer Choice Award', image: '/logos/award4.svg' }
];

export function NTClipboardTestimonials(): React.JSX.Element {
    return (
        <GridSection hideVerticalGridLines>
            <div className="container py-8">
                <div className="mb-12 text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-3 text-sm font-medium text-green-800">
                        <StarIcon className="size-4" />
                        We Love Them
                    </div>
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                        What Our Manufacturing Partners Have To Say
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        See why production managers choose EDGEBIC for their scheduling and optimization challenges
                    </p>
                </div>

                {/* Testimonials Grid - DLE Style */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-slate-900"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 opacity-0 transition-opacity group-hover:opacity-100 dark:from-blue-900/10 dark:to-indigo-900/10" />

                            <div className="relative">
                                {/* Quote */}
                                <blockquote className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                                    "{testimonial.quote}"
                                </blockquote>

                                {/* Author Section with Image */}
                                <div className="flex items-center gap-4 border-t pt-4">
                                    {/* Profile Image Placeholder */}
                                    <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-lg">
                                        {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                    </div>

                                    <div className="flex-1">
                                        <div className="font-bold text-gray-900 dark:text-white text-lg">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            {testimonial.role}
                                        </div>
                                        <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                            {testimonial.location}
                                        </div>
                                    </div>
                                </div>

                                {/* Company Badge */}
                                <div className="mt-3 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                    {testimonial.company}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </GridSection>
    );
}
