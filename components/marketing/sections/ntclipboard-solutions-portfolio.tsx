'use client';

import React from 'react';
import { Briefcase, Factory, Settings, Wrench } from 'lucide-react';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import { SiteHeading } from '@/components/marketing/fragments/site-heading';

export function NTClipboardSolutionsPortfolio(): React.JSX.Element {
    return (
        <GridSection hideVerticalGridLines>
            <div className="container py-6">
                <SiteHeading
                    badge="Solutions Portfolio"
                    title="User Driven Solutions"
                    description="Custom-tailored manufacturing solutions designed around your specific needs"
                />

                <div className="mx-auto mt-8 max-w-6xl">
                    <div className="grid gap-4 md:grid-cols-2">
                        {/* Production Planning Solutions */}
                        <div className="rounded-3xl border bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:from-blue-900/20 dark:to-indigo-900/20">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/50 dark:text-blue-200">
                                <Factory className="size-4" />
                                Production Planning
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                                Manufacturing Execution Systems
                            </h3>
                            <p className="mb-4 text-slate-700 dark:text-slate-300">
                                Streamline your production workflow with real-time scheduling,
                                resource optimization, and bottleneck identification.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <li>• Dynamic production scheduling</li>
                                <li>• Resource allocation optimization</li>
                                <li>• Real-time progress tracking</li>
                                <li>• Capacity planning tools</li>
                            </ul>
                        </div>

                        {/* Quality Management Solutions */}
                        <div className="rounded-3xl border bg-gradient-to-br from-green-50 to-emerald-50 p-8 dark:from-green-900/20 dark:to-emerald-900/20">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 dark:bg-green-900/50 dark:text-green-200">
                                <Settings className="size-4" />
                                Quality Management
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                                Quality Control Systems
                            </h3>
                            <p className="mb-4 text-slate-700 dark:text-slate-300">
                                Maintain product excellence with comprehensive quality tracking
                                and automated inspection workflows.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <li>• Quality checkpoint automation</li>
                                <li>• Defect tracking and analysis</li>
                                <li>• Supplier quality management</li>
                                <li>• Compliance reporting</li>
                            </ul>
                        </div>

                        {/* Inventory Management Solutions */}
                        <div className=" rounded-3xl border bg-gradient-to-br from-purple-50 to-violet-50 p-8 dark:from-purple-900/20 dark:to-violet-900/20">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800 dark:bg-purple-900/50 dark:text-purple-200">
                                <Briefcase className="size-4" />
                                Inventory Management
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                                Smart Inventory Solutions
                            </h3>
                            <p className="mb-4 text-slate-700 dark:text-slate-300">
                                Optimize inventory levels with predictive analytics and
                                automated reorder systems.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <li>• Automated stock level monitoring</li>
                                <li>• Predictive demand forecasting</li>
                                <li>• Supplier integration</li>
                                <li>• Cost optimization algorithms</li>
                            </ul>
                        </div>

                        {/* Custom Integration Solutions */}
                        <div className="rounded-3xl border bg-gradient-to-br from-orange-50 to-red-50 p-8 dark:from-orange-900/20 dark:to-red-900/20">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-800 dark:bg-orange-900/50 dark:text-orange-200">
                                <Wrench className="size-4" />
                                Custom Integration
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                                Tailored Integration Services
                            </h3>
                            <p className="mb-4 text-slate-700 dark:text-slate-300">
                                Seamlessly integrate with your existing systems and workflows
                                for maximum efficiency.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <li>• ERP system integration</li>
                                <li>• Legacy system connectivity</li>
                                <li>• Custom API development</li>
                                <li>• Data migration services</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
                            Every solution is customized to fit your unique manufacturing
                            environment.
                        </p>
                        <p className="mt-2 text-orange-600 dark:text-orange-400">
                            Because one size never fits all in manufacturing.
                        </p>
                    </div>
                </div>
            </div>
        </GridSection>
    );
}
