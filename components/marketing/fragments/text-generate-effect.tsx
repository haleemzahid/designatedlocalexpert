'use client';

import * as React from 'react';
import {
  motion,
  stagger,
  useAnimate,
  type HTMLMotionProps
} from 'framer-motion';

export type TextGenerateEffectProps = {
  words: string;
  className?: string;
};

export function TextGenerateEffect({
  words,
  className
}: TextGenerateEffectProps): React.JSX.Element {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');
  const renderWords = () => {
    return (
      <div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <span
              key={word + idx.toString()}
              className="opacity-0"
            >
              {word}{' '}
            </span>
          );
        })}
      </div>
    );
  };
  return (
    <div className={className}>
      {renderWords()}
    </div>
  );
}
