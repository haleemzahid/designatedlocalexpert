import * as React from 'react';

import { AboutSection } from './about-section';
import { HeroContent } from './hero-content-client';

export function NTClipboardHero(): React.JSX.Element {
  return (
    <div className="w-full">
      <HeroContent />
      <AboutSection />
    </div>
  );
}
