import * as React from 'react';

import { AppInfo } from '@/constants/app-info';
import { cn } from '@/lib/utils';

// The logo size below is 96px x 96px in an 96px x 96px container (size-24).
// Because of the larger size, the components <Sidebar /> and <Mobilesheet /> may need padding adjustments.
// When you update the logo make sure to eventually adjust the pl-0.5 class in those two components if needed.

export type LogoProps = React.HTMLAttributes<HTMLDivElement> & {
  hideSymbol?: boolean;
  hideWordmark?: boolean;
};

export function Logo({
  hideSymbol,
  hideWordmark = false, // Show wordmark by default with logo
  className,
  ...other
}: LogoProps): React.JSX.Element {
  return (
    <div
      className={cn('flex items-center space-x-3', className)}
      {...other}
    >
      {!hideSymbol && (
        <div className="flex  items-center justify-center p-1">
          <div className="flex   items-center justify-center">
            {/* DLE Logo - Light theme */}
            <img
              src="https://designatedlocalexpert.com/wp-content/uploads/2022/07/DleImg.png"
              alt="Designated Local Expert Logo"
              width="70"
              height="70"
              className="object-contain dark:hidden"
            />
            {/* DLE Logo - Dark theme (with red ring and white text) */}
            <img
              src="https://designatedlocalexpert.com/wp-content/uploads/2022/07/DleImg.png"
              alt="Designated Local Expert Logo"
              width="70"
              height="70"
              className="object-contain hidden dark:block hue-rotate-0 brightness-200 contrast-150"
            />
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
