'use client';

import React from 'react';
import {
  Award,
  Handshake,
  Heart,
  Lightbulb,
  Shield,
  Users
} from 'lucide-react';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import { SiteHeading } from '@/components/marketing/fragments/site-heading';

export function NTClipboardCoreValues(): React.JSX.Element {
  const values = [
    {
      icon: <Heart className="size-8" />,
      title: 'Customer-Centric',
      description:
        'Your success is our priority. We listen, understand, and deliver solutions that truly fit your needs.',
      color:
        'from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30',
      iconBg: 'bg-red-100 dark:bg-red-900/50',
      iconColor: 'text-red-600 dark:text-red-400'
    },
    {
      icon: <Users className="size-8" />,
      title: 'Partnership Approach',
      description:
        'We work alongside you as partners, not just vendors. Your challenges become our challenges to solve together.',
      color:
        'from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30',
      iconBg: 'bg-blue-100 dark:bg-blue-900/50',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: <Lightbulb className="size-8" />,
      title: 'Innovation & Adaptability',
      description:
        'We embrace new technologies while respecting proven methods, creating solutions that evolve with your business.',
      color:
        'from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30',
      iconBg: 'bg-yellow-100 dark:bg-yellow-900/50',
      iconColor: 'text-yellow-600 dark:text-yellow-400'
    },
    {
      icon: <Shield className="size-8" />,
      title: 'Reliability & Trust',
      description:
        'Over 30 years of consistent delivery. When we commit, we deliver. Your trust is our most valuable asset.',
      color:
        'from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30',
      iconBg: 'bg-green-100 dark:bg-green-900/50',
      iconColor: 'text-green-600 dark:text-green-400'
    },
    {
      icon: <Award className="size-8" />,
      title: 'Quality Excellence',
      description:
        "We don't just meet standards, we set them. Every solution reflects our commitment to manufacturing excellence.",
      color:
        'from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30',
      iconBg: 'bg-purple-100 dark:bg-purple-900/50',
      iconColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: <Handshake className="size-8" />,
      title: 'Integrity & Transparency',
      description:
        'Honest communication, fair pricing, and transparent processes. We build relationships based on mutual respect.',
      color:
        'from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30',
      iconBg: 'bg-indigo-100 dark:bg-indigo-900/50',
      iconColor: 'text-indigo-600 dark:text-indigo-400'
    }
  ];

  return (
    <GridSection hideVerticalGridLines>
      <div className="container py-6">
        <SiteHeading
          badge="Core Values"
          title="What Drives Us Forward"
          description="The principles that have guided EDGEBIC for over three decades"
        />

        <div className="mx-auto mt-8 max-w-6xl">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={index}
                className={`rounded-3xl border bg-gradient-to-br p-8 ${value.color}`}
              >
                <div
                  className={`mb-6 inline-flex items-center justify-center rounded-full p-3 ${value.iconBg}`}
                >
                  <div className={value.iconColor}>{value.icon}</div>
                </div>

                <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                  {value.title}
                </h3>

                <p className="text-slate-700 dark:text-slate-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="rounded-3xl border bg-gradient-to-br from-slate-50 to-slate-100 p-8 dark:from-slate-900 dark:to-slate-800">
              <blockquote className="text-xl font-semibold text-slate-900 dark:text-white md:text-2xl">
                "Our values aren't just words on a wall – they're the foundation
                of every solution we create and every relationship we build."
              </blockquote>
              <p className="mt-4 text-lg text-orange-600 dark:text-orange-400">
                — The EDGEBIC Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
