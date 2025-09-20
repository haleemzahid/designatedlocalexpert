'use client';

import React from 'react';
import { TargetIcon } from 'lucide-react';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import { SiteHeading } from '@/components/marketing/fragments/site-heading';

export function NTClipboardMissionOnly(): React.JSX.Element {
  return (
    <GridSection hideVerticalGridLines>
      <div className="container py-6">
        <SiteHeading
          badge="Our Mission"
          title="Make Manufacturing Great Again!"
          description="Empowering manufacturers since 1991 with solutions that fit like a glove"
        />

        {/* Mission Statement Section */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="rounded-3xl border bg-gradient-to-br from-slate-50 to-slate-100 p-8 text-center dark:from-slate-900 dark:to-slate-800 md:p-12">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 px-6 py-3 text-sm font-medium text-orange-800 dark:from-orange-900/30 dark:to-red-900/30 dark:text-orange-200">
              <TargetIcon className="size-4" />
              Mission Statement
            </div>

            <blockquote className="mb-8 text-2xl font-bold leading-relaxed text-slate-900 dark:text-white md:text-3xl">
              "Empower manufacturers to become more competitive and profitable
              through efficient resource management tools that are affordable,
              adaptable, and easily implemented."
            </blockquote>

            <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
              Since 1991, what makes US unique is we work with you to solve
              production planning, scheduling, and tracking challenges your way.
            </p>

            <p className="mb-6 text-xl font-semibold text-orange-700 dark:text-orange-300">
              User Solutions: LISTEN and DELIVER. LISTEN to the customer,
              understand their needs, and DELIVER a solution.
            </p>

            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              We look forward to hearing from you and learning of your
              challenges and the opportunity to deliver an affordable solution
              that fits you like a glove!
            </p>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
