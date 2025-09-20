'use client';

import React from 'react';
import Image from 'next/image';
import { Award, Mail, MapPin, Phone, Users } from 'lucide-react';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import { SiteHeading } from '@/components/marketing/fragments/site-heading';

export function NTClipboardAbout(): React.JSX.Element {
    const teamMembers = [
        {
            name: 'Jim Convis',
            title: 'Founder & CEO',
            image:
                'https://www.usersolutions.com/wp-content/uploads/2022/09/jim-150x150.png',
            description:
                "In 1991, Jim Convis spun off User Solutions from Lotus where he was adapting Lotus 1-2-3 to better serve the manufacturing market. Starting with a series of simple templates (found in Operations Manager, still available today), he found folks wanted to use familiar tools (such as the spreadsheet) as the preferred method to solve common production scheduling issues. For over 30+ years, Jim has tried to listen to what customers were asking for and developing an architecture to support all types of challenges in all sorts of environments. Jim has a BS in Applied Mathematics/Physics from University of Colorado and worked at GM/EDS implementing the first Micro-Processor Cell Controller back in the 80's.",
            philosophy:
                'With a vision statement of "Listen and Deliver" you could add \'guaranteed\' to complete our philosophy on making you successful.'
        },
        {
            name: 'Dennis Johnson',
            title: 'Senior Solutions Consultant',
            image:
                'https://www.usersolutions.com/wp-content/uploads/2022/09/Dennis-150x150.png',
            description:
                'Dennis graduated from the University of Arkansas at Fayetteville with a degree in Industrial Management. The first twenty years of his career were in Industrial Engineering and manufacturing management. He learned the needs and requirements of various industries and sectors. The last twenty years of his career have been spent in the manufacturing software industry where he applied many different experiences of solutions for selecting, selling, implementing, training, consulting and using software.',
            philosophy:
                "Dennis' primary goal through the years has been to combine professional expertise with industry knowledge to help customers tackle their most pressing issues."
        },
        {
            name: 'Bob Russell',
            title: 'Operations Manager',
            image:
                'https://www.usersolutions.com/wp-content/uploads/2022/09/Russell-150x150.png',
            description:
                'Bob graduated Summa Cum Laude (with highest honors) from California State University San Francisco after serving four years in the US Navy. For many decades, Bob has been engaged exclusively in the manufacturing industry as buyer, production control manager, material planner, quality control manager, controller, operations manager, vice president of operations, and chief executive officer.',
            philosophy:
                'In 1995, Bob started his own business consulting company specializing in advising companies on how to best apply computer systems in their operations as well as developing custom software solutions when necessary.'
        },
        {
            name: 'Jeff Martinez',
            title: 'Technical Director & Asia Operations',
            image:
                'https://www.usersolutions.com/wp-content/uploads/2022/09/Jeff-150x150.png',
            description:
                'Jeff graduated Summa Cum Laude (with highest honors) from California State University San Francisco after serving four years in the US Navy. For many decades, Jeff has been engaged exclusively in the manufacturing industry across various roles from buyer to chief executive officer. Jeff manages the User Solutions SolverLution offering, which blends Higher Level Optimization techniques with Production Scheduling techniques.',
            philosophy:
                'Jeff also directly manages customer sales and support throughout Asia, bringing global perspective to manufacturing solutions.'
        },
        {
            name: 'Jack Convis',
            title: 'Social Media Manager',
            image:
                'https://www.usersolutions.com/wp-content/uploads/2022/11/IMG_5910-1-100x100.png',
            description:
                'Jack graduated high school in 2020 and has since been accepted into an exclusive software engineering program at Grand Circus in Detroit -- the program Jack is enrolled in had a narrow, eight-percent acceptance rate. Having built a subscriber base on YouTube of 7,000+ over a few years, he is an accomplished video editor & producer for various businesses.',
            philosophy:
                'Jack brings fresh digital marketing perspective and technical skills to help User Solutions connect with the next generation of manufacturing professionals.'
        }
    ];

    const companyStats = [
        {
            icon: <Users className="size-8" />,
            number: '30+',
            label: 'Years of Excellence',
            description: 'Serving manufacturing industry since 1991'
        },
        {
            icon: <Award className="size-8" />,
            number: '1000+',
            label: 'Satisfied Customers',
            description: 'Worldwide manufacturing solutions'
        },
        {
            icon: <MapPin className="size-8" />,
            number: '25+',
            label: 'Countries Served',
            description: 'Global reach with local expertise'
        }
    ];

    return (
        <GridSection hideVerticalGridLines>
            <div className="container pt-12">
                <SiteHeading
                    badge="About Us"
                    title="Providing Advanced Planning Scheduling and Tracking Software"
                    description="Meet the team behind 30+ years of manufacturing excellence and innovation"
                />

                {/* Company Stats */}
                <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
                    {companyStats.map((stat, index) => (
                        <div
                            key={index}
                            className="rounded-3xl border bg-gradient-to-br from-slate-50 to-slate-100 p-6 text-center dark:from-slate-900 dark:to-slate-800"
                        >
                            <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400">
                                {stat.icon}
                            </div>
                            <div className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">
                                {stat.number}
                            </div>
                            <div className="mb-1 text-lg font-semibold text-orange-600 dark:text-orange-400">
                                {stat.label}
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Team Leaders Section */}
                <div className="mt-8">
                    <div className="mb-8 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
                            Team Leaders
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Product Support and Sales Experts
                        </p>
                    </div>

                    <div className="space-y-12">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className={`!mt-5 flex flex-col items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                            >
                                {/* Profile Image */}
                                <div className="w-full lg:w-1/3">
                                    <div className="mx-auto size-80 overflow-hidden rounded-full">
                                        <div className="flex size-full items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700">
                                            {member.image.startsWith('http') ? (
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    width={300}
                                                    height={300}
                                                    className="size-full rounded-full object-cover"
                                                />
                                            ) : (
                                                <Users className="size-24 text-slate-400" />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Profile Content */}
                                <div className="w-full text-center lg:w-2/3 lg:text-left">
                                    <div className="rounded-3xl border bg-gradient-to-br from-slate-50 to-slate-100 p-8 dark:from-slate-900 dark:to-slate-800">
                                        <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                                            {member.name}
                                        </h3>
                                        <p className="mb-4 text-lg font-medium text-orange-600 dark:text-orange-400">
                                            {member.title}
                                        </p>
                                        <p className="mb-4 text-slate-700 dark:text-slate-300">
                                            {member.description}
                                        </p>
                                        {member.philosophy && (
                                            <blockquote className="border-l-4 border-orange-500 bg-orange-50 p-4 italic text-slate-800 dark:bg-orange-900/20 dark:text-slate-200">
                                                {member.philosophy}
                                            </blockquote>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Company Recognition */}
                <div className="mt-8 text-center">
                    <div className="rounded-3xl border bg-gradient-to-br from-orange-50 to-red-50 p-8 dark:from-orange-900/20 dark:to-red-900/20">
                        <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                            Celebrating 30+ Years of Award Winning Software!
                        </h3>
                        <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
                            Recognized by industry leaders and trusted by manufacturers
                            worldwide
                        </p>

                        {/* Contact Information */}
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300">
                                <Mail className="size-5 text-orange-600" />
                                <span>us@usersolutions.com</span>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300">
                                <Phone className="size-5 text-orange-600" />
                                <span>248.486.6365</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission Statement */}
                <div className="mt-8 text-center">
                    <div className="mx-auto max-w-3xl rounded-3xl border bg-gradient-to-br from-slate-50 to-slate-100 p-8 dark:from-slate-900 dark:to-slate-800">
                        <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                            Our Mission
                        </h3>
                        <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
                            At User Solutions, we believe manufacturing software should be
                            intuitive, affordable, and adaptable to your unique workflow. We
                            don't force you to change how you work - instead, we create
                            solutions that fit seamlessly into your existing processes.
                        </p>
                        <p className="text-xl font-semibold text-orange-600 dark:text-orange-400">
                            "Listen and Deliver" - Guaranteed
                        </p>
                    </div>
                </div>
            </div>
        </GridSection>
    );
}
