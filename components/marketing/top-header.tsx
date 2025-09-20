import * as React from 'react';
import { Phone } from 'lucide-react';

export function TopHeader(): React.JSX.Element {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-center text-sm text-white dark:from-slate-800 dark:to-slate-900 dark:text-slate-100">
      <div className="container flex items-center justify-center gap-4">
        <span className="font-medium">
          Production Planning Software <span className="italic">made easy</span>
        </span>
        <div className="hidden items-center gap-1 sm:flex">
          <Phone className="size-4" />
          <a
            href="tel:248.486.6365"
            className="font-semibold hover:text-blue-200 hover:underline dark:hover:text-slate-300"
          >
            248.486.6365
          </a>
        </div>
      </div>
    </div>
  );
}
