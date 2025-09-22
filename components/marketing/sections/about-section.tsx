// @ts-nocheck
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

export function AboutSection(): React.JSX.Element {
  return (
    <>
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-16"
        style={{
          backgroundImage:
            'url("https://designatedlocalexpert.com/wp-content/uploads/2024/05/BG-HomePage-High.png")'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6"
        >
          {/* Text Block */}
          <div className="max-w-2xl">
            <div className="mb-2 text-sm font-semibold text-rose-400">
              About Us
            </div>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Your Trusted Partner in Real Estate SEO & Local Marketing
            </h2>
            <p className="mb-4 leading-relaxed font-bold">
              DLE is the #1 leading authority in Realtor Google Maps Marketing
              and Local SEO for real estate agents 📍🌎. Our exclusive Geo
              Farming Designation combined with our proprietary real estate SEO
              software and websites work in synergy — empowering DLE agents to
              consistently capture local listings and dominate their approved
              city market.
            </p>
            <p className="mb-4 leading-relaxed">
              We excel as the top real estate SEO company and digital marketing
              agency for realtors, specializing in Google Business Profile
              (Google My Business) optimization, real estate SEO services, and
              comprehensive online marketing strategies for real estate agents.
            </p>
            <p className="mb-4 leading-relaxed">
              Our focus on local SEO for Realtors, Google Maps SEO, realtor
              website SEO, and technical SEO services ensures your brand is
              easily discovered online. With our SEO for real estate marketing
              solutions, you can rank higher on Google, increase visibility, and
              attract more clients.
            </p>
            <p className="mb-6 leading-relaxed">
              At DLE Network, we help agents elevate their professional image,
              build a powerful online presence for real estate, and stand out in
              their community with our expert real estate SEO and digital
            </p>
            <button className="rounded-full bg-rose-600 px-8 py-3 text-white font-semibold shadow-lg hover:bg-rose-700 transition-colors">
              About Us
            </button>
          </div>

          {/* Side Image */}
          <div className="hidden md:block">
            <motion.img
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              src="https://designatedlocalexpert.com/wp-content/uploads/2024/05/DLE-Network-about-pics-283x300.jpg"
              alt="DLE Network Team"
              className="h-auto w-[450px] rounded-lg object-cover shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Mobile Image - shown below text on mobile */}
        <div className="mt-8 flex justify-center md:hidden">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            src="https://designatedlocalexpert.com/wp-content/uploads/2024/05/DLE-Network-about-pics-283x300.jpg"
            alt="DLE Network Team"
            className="h-auto w-80 rounded-lg object-cover shadow-2xl"
          />
        </div>
      </section>

      {/* Video Section */}
      <section className="relative w-full ">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/BOn9bl2i21A"
                title="Agent video | DLE Network"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative w-full py-16 mt-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* Left Side - Team Cards */}
            <div className="flex flex-col md:flex-row gap-6 lg:w-2/3">
              {/* Anthony Grynchal Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://designatedlocalexpert.com/wp-content/uploads/2024/05/real-estate-wholesale-coachings1.jpg"
                    alt="Anthony Grynchal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Anthony Grynchal
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Founder, CEO & Mr. Claremont
                  </p>
                </div>
              </motion.div>

              {/* Jeff Baenen Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://designatedlocalexpert.com/wp-content/uploads/2024/05/Jeff.jpg"
                    alt="Jeff Baenen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Jeff Baenen
                  </h3>
                  <p className="text-gray-600 text-sm">Co-Founder & Chairman</p>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:w-1/3 lg:pl-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <span className="text-rose-600 font-semibold text-sm">
                    Our Work Inspires Smiles
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                  The Faces
                  <br />
                  Behind Our
                  <br />
                  Success
                </h2>
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-lg flex items-center gap-2">
                  Meet The Team
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative w-full py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center lg:flex-row items-start gap-12">
            {/* Left Side - Image */}
            <div className="lg:w-1/2">
              <img
                src="https://designatedlocalexpert.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-28-at-8.36.20-PM.jpeg"
                alt="Beautiful Real Estate Property"
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Overcoming Realtor Challenges With DLE Solutions
                </h2>

                <div className="space-y-6">
                  {/* Solution 1 */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      #1
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Being Remembered
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        We ensure your brand stays at the forefront of clients'
                        minds with strategic real estate SEO marketing, digital
                        marketing for real estate agents, and realtor branding
                        strategies that build long-term recognition.
                      </p>
                    </div>
                  </div>

                  {/* Solution 2 */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      #2
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Being Found
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Our proven local SEO services for realtors and Google
                        Business Profile optimization for real estate agents
                        boost your online visibility, making you easily
                        discoverable in Google Maps SEO and local search
                        results.
                      </p>
                    </div>
                  </div>

                  {/* Solution 3 */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      #3
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Finding Sellers
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        DLE helps you effectively target homeowners considering
                        selling with tailored SEO for real estate listings, real
                        estate lead generation SEO, and local search engine
                        optimization for property sellers.
                      </p>
                    </div>
                  </div>

                  {/* Solution 4 */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      #4
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Rising Above the Crowd
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Stand out as the go-to local real estate agent in your
                        market with our advanced real estate SEO strategies,
                        realtor website SEO optimization, and best SEO services
                        for realtors that help you outrank competitors.
                      </p>
                    </div>
                  </div>

                  {/* Solution 5 */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      #5
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Attracting More Buyers & Sellers
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Enhance your property listings with real estate listings
                        SEO, real estate digital marketing services, and SEO for
                        Realtors to attract more qualified buyers and motivated
                        sellers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-lg flex items-center gap-2">
                    Read More For Solutions
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative w-full py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="mb-4">
              <span className="text-rose-600 font-semibold text-sm">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Real Estate SEO Services
            </h2>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-lg">
              More Services
            </button>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Google Business Profile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  <img
                    src="https://designatedlocalexpert.com/wp-content/uploads/2024/05/business-300x300.png"
                    alt="Google Business Profile"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Google Business Profile
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Optimize your Google Business Profile for real estate agents
                  to rank higher in search results with our proven real estate
                  SEO services. We specialize in Google Maps SEO for realtors,
                  helping you dominate your approved city.
                </p>
              </div>
            </motion.div>

            {/* Marketing To Sellers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  <img
                    src="https://designatedlocalexpert.com/wp-content/uploads/2024/05/seo.png"
                    alt="Marketing To Sellers"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Marketing To Sellers
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Utilize targeted SEO strategies for real estate sellers and
                  print marketing campaigns to reach homeowners ready to sell.
                  Our unique Google Business Profile hacks ensure you capture
                  more seller leads.
                </p>
              </div>
            </motion.div>

            {/* Marketing To Buyers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  <img
                    src="https://designatedlocalexpert.com/wp-content/uploads/2024/05/exchange.png"
                    alt="Marketing To Buyers"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Marketing To Buyers
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Implement listing sign SEO strategies and digital marketing
                  for real estate buyers to attract qualified home buyers
                  directly to you. With realtor website SEO, you'll consistently
                  expand your client base.
                </p>
              </div>
            </motion.div>

            {/* Lifestyle Branding */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  <img
                    src="https://designatedlocalexpert.com/wp-content/uploads/2024/05/branding.png"
                    alt="Lifestyle Branding"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Lifestyle Branding
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Demonstrate your pride in your community and stand out as the
                  go-to agent with real estate lifestyle branding. Our SEO for
                  real estate agents highlights your role as the trusted local
                  listing expert.
                </p>
              </div>
            </motion.div>

            {/* On-Page SEO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  <img
                    src="https://designatedlocalexpert.com/wp-content/uploads/2024/03/seo-1.png"
                    alt="On-Page SEO"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  On-Page SEO
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Boost your website rankings with real estate on-page SEO
                  services. Our real estate agent SEO consultants refine your
                  content, site structure, and keywords, ensuring higher search
                  engine visibility for realtors.
                </p>
              </div>
            </motion.div>

            {/* Social Media Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  <img
                    src="https://designatedlocalexpert.com/wp-content/uploads/2024/03/bullhorn.png"
                    alt="Social Media Marketing"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Social Media Marketing
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Elevate your real estate promotion strategies with expert
                  social media marketing for real estate agents. From Facebook
                  ads for realtors to Instagram marketing, we help you maximize
                  engagement and grow your digital presence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative w-full py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="mb-4">
              <span className="text-rose-600 font-semibold text-sm">
                We Love Them
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              What Our Clients Have To Say
            </h2>
          </motion.div>

          {/* Testimonial Slider */}
          <TestimonialSlider />
        </div>
      </section>
    </>
  );
}

// Testimonial Slider Component
function TestimonialSlider(): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Holli Reese',
      title: 'Ms. Summerville',
      image:
        'https://designatedlocalexpert.com/wp-content/uploads/2023/07/Ms-Summerville-Bio-Pic-scaled-e1688284415966-768x854.jpg',
      text: "This is the real deal! I got two listings from the DLE SEO plan from being found online. Thank you DLE for my surrogate identity!!! Absolutely thrilled with how my wrap came out as Ms. Summerville! I wake up excited every day! My newest Summerville listing that went live today! DLE is changing lives one person at a time!!! Let's GO! 🔥🔥🔥"
    },
    {
      id: 2,
      name: 'George Ozburn',
      title: 'Mr. Fresno',
      image:
        'https://designatedlocalexpert.com/wp-content/uploads/2023/12/real-estate-investing-coaching-programs-768x788.jpg',
      text: "Being Mr. Fresno transformed my real estate career. The DLE Network provided the solid SEO plan I needed to establish myself as a local expert, attract listings, and be found online. Embracing this persona boosts my confidence and sparks local conversations about real estate. DLE's branding is a game changer, elevating my career and life to new heights."
    },
    {
      id: 3,
      name: 'Frank Spencer',
      title: 'Mr. Chatsworth',
      image:
        'https://designatedlocalexpert.com/wp-content/uploads/2023/12/real-estate-development-coach-768x960.jpg',
      text: 'I have been a Realtor/Broker since 1993. And during this time I have been in business with many traditional brokerages, all of whom over promise and under deliver. The DLE Group is different. Their singular focus is building your brand, not theirs. When their systems are on point they put the pedal to the floor and press on. I love this group and will be a member for life.'
    },
    {
      id: 4,
      name: 'Lina C',
      title: 'Ms. Irvine',
      image:
        'https://designatedlocalexpert.com/wp-content/uploads/2023/03/Ms-Irvine-768x768.jpg',
      text: 'Establishing my business in a new area is difficult, especially with 4,600 full-time licensed agents in the area. To break into this market and stand out, I deployed Ms. Irvine branding. I started out with a print mail campaign that resulted in 2 listings and the identification of a buyer that I put into escrow for a $4.6 million dollar home within 3 weeks of marketing campaign.'
    },
    {
      id: 5,
      name: 'Brianna L',
      title: 'Ms. Glendora',
      image:
        'https://designatedlocalexpert.com/wp-content/uploads/2023/08/Mr-and-Mrs-Glendora-Real-Estate-768x835.jpg',
      text: 'My husband and I are a team that has done well on building out business on referrals, although that has often meant managing listings quite a distance from our home market. Our goal was to centralize our business closer to home. The local designation and training showed us a clear path to gaining more local market share.'
    }
  ];

  // Auto-slide functionality
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="relative flex items-center justify-between max-w-7xl mx-auto">
      {/* Left Arrow - Outside content */}
      <button
        onClick={goToPrevious}
        className="flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10 -ml-6"
        aria-label="Previous testimonial"
      >
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Main Testimonial Container */}
      <div className="flex-1 mx-6">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-8"
        >
          {/* Client Image - Left Side */}
          <div className="flex-shrink-0">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Testimonial Text and Info - Right Side */}
          <div className="flex-1 ml-6">
            <div className="mb-4">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-bold text-red-600 mb-1">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-600 font-medium text-sm">
                {testimonials[currentIndex].title}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Arrow - Outside content */}
      <button
        onClick={goToNext}
        className="flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10 -mr-6"
        aria-label="Next testimonial"
      >
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
