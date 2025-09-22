import * as React from 'react';

import { AppInfo } from '@/constants/app-info';
import { cn } from '@/lib/utils';

export type LogoProps = React.HTMLAttributes<HTMLDivElement> & {
  hideSymbol?: boolean;
  hideWordmark?: boolean;
};

export function Logo({
  hideSymbol,
  hideWordmark = false,
  className,
  ...other
}: LogoProps): React.JSX.Element {
  return (
    <div
      className={cn('flex items-center space-x-3', className)}
      {...other}
    >
      {!hideSymbol && (
        <div className="flex items-center justify-center p-1">
          <div className="relative flex items-center justify-center w-[70px] h-[70px]">
            {/* Base: Original logo (red border) */}
            <div className="relative w-[70px] h-[70px]">
              {/* Overlay: turns white areas black */}
              <img
                src="https://designatedlocalexpert.com/wp-content/uploads/2022/07/DleImg.png"
                alt="Logo black inside"
                className="absolute inset-0 object-contain dark:hidden brightness-0 mix-blend-multiply"
              />
              {/* Dark mode logo */}
              <img
                src="https://designatedlocalexpert.com/wp-content/uploads/2022/07/DleImg.png"
                alt="Logo dark mode"
                className="hidden dark:block object-contain brightness-200 contrast-150"
              />
            </div>

          </div>
        </div>
      )}
      {!hideWordmark && (
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          {AppInfo.APP_NAME}
        </span>
      )}
    </div>
  );
}
