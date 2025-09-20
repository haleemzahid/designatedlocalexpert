'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function HeroContent(): React.JSX.Element {
  // Benefits rotation state
  const [currentBenefitIndex, setCurrentBenefitIndex] = React.useState(0);

  const benefits = [
    'Clear path to capture local listing market share',
    'Take Away power from online competition and redirect leads to you',
    'Powerful SEO Advantages',
    'Ideal for Geo Farm Marketing'
  ];

  // Benefits rotation effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBenefitIndex((prev) => (prev + 1) % benefits.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [benefits.length]);

  // Auto-scroll disabled by default
  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div
      className="relative !mt-0 w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://designatedlocalexpert.com/wp-content/uploads/al_opt_content/IMAGE/designatedlocalexpert.com/wp-content/uploads/2023/04/real-estate-coaching-agreement-1024x674.jpg.bv.webp?bv_host=designatedlocalexpert.com")'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex min-h-[600px] flex-col items-center justify-center px-4 pb-20 pt-16 text-center text-white"
      >
        {/* Tagline */}
        <div className="">
          The Most Powerful Personal Branding In The Real Estate Industry™
        </div>

        {/* Main Title */}
        <h1 className="text-4xl font-bold text-white">
          Your Trusted Real Estate SEO Company
        </h1>

        {/* Key Benefits List */}
        <div className=" max-w-4xl text-center">
          <div className="flex min-h-[80px] items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBenefitIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-lg text-white md:text-xl"
              >
                {benefits[currentBenefitIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* eXp Realty Logo */}
        <div className="flex justify-center">
          <img
            src="https://designatedlocalexpert.com/wp-content/uploads/al_opt_content/IMAGE/designatedlocalexpert.com/wp-content/uploads/2025/04/eXp-Realty-mailing-Banner-3-e1744207666621-300x92.png.bv.webp?bv_host=designatedlocalexpert.com"
            alt="eXp Realty"
            className="h-auto object-contain opacity-90"
          />
        </div>
      </motion.div>
    </div>
  );
}
