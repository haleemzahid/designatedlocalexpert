import * as React from 'react';

import { HeroContent } from './hero-content-client';
import { AboutSection } from './about-section';

export function NTClipboardHero(): React.JSX.Element {
  return (
    <div className="w-full">
      <HeroContent />
      <AboutSection />
    </div>
  );
}
