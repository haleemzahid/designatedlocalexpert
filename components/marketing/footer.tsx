'use client';

import * as React from 'react';
import Link from 'next/link';
// React Icons import - this was missing!
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaMapMarkerAlt
} from 'react-icons/fa';

// import { toast } from 'sonner';

import { ExternalLink } from '@/components/marketing/fragments/external-link';
import { ThemeSwitcher } from '@/components/marketing/fragments/theme-switcher';
// import {
//   FOOTER_LINKS,
//   SOCIAL_LINKS
// } from '@/components/marketing/marketing-links';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
import { AppInfo } from '@/constants/app-info';
import { Routes } from '@/constants/routes';
import { FacebookIcon } from '../ui/brand-icons';

export function Footer(): React.JSX.Element {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Top Row - Logo and Legal Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          {/* Left - Logo */}
          <div className="flex items-center">
            <img
              src="https://designatedlocalexpert.com/wp-content/uploads/2022/07/DleImg.png"
              alt="Designated Local Expert Logo"
              width="80"
              height="80"
              className="object-contain"
            />
          </div>

          {/* Right - Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-1 text-xs text-white">
            <a
              href="https://designatedlocalexpert.com/ada-compliant-disclaimer/"
              className="hover:text-gray-300 transition-colors text-white"
            >
              ADA compliant disclaimer
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="https://designatedlocalexpert.com/sitemap/"
              className="hover:text-gray-300 transition-colors text-white"
            >
              Sitemap
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="https://designatedlocalexpert.com/copyright-policy/"
              className="hover:text-gray-300 transition-colors text-white"
            >
              Copyright Policy
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="https://designatedlocalexpert.com/cookie/"
              className="hover:text-gray-300 transition-colors text-white"
            >
              Cookie
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="https://designatedlocalexpert.com/disclaimer/"
              className="hover:text-gray-300 transition-colors text-white"
            >
              Disclaimer
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <Link
              href={Routes.PrivacyPolicy}
              className="hover:text-gray-300 transition-colors text-white"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="https://designatedlocalexpert.com/terms-conditions/"
              className="hover:text-gray-300 transition-colors text-white"
            >
              Terms & conditions
            </a>
            <span className="text-gray-400 mx-1">|</span>
            <a
              href="https://mrcali.com/"
              className="hover:text-gray-300 transition-colors text-white"
            >
              Trademark Protected Holding Company
            </a>
          </div>
        </div>

        {/* Bottom Row - Copyright and Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left - Copyright */}
          <div className="text-sm text-center md:text-left">
            <p>Copyright © 2025 Designated Local Expert</p>
            <p>Network, All rights reserved</p>
          </div>

          {/* Right - Social Media Icons */}
          <div className="flex items-center space-x-3">
            <a target="_blank"
              href="https://www.facebook.com/designatedlocalexpertnetwork"
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              title="Facebook"
            >
              <FacebookIcon></FacebookIcon  >
            </a>
            <a target="_blank"
              href="https://www.instagram.com/designatedlocalexpert/"
              className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              title="Instagram"
            >
              <FaInstagram className="w-5 h-5 text-white" />
            </a>
            <a target="_blank"
              href="https://www.linkedin.com/company/designated-local-expertdle/"
              className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5 text-white" />
            </a>
            <a target="_blank"
              href="https://www.youtube.com/channel/UCff1cUEcb4MEIr3Tn4nzcpg"
              className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              title="YouTube"
            >
              <FaYoutube className="w-5 h-5 text-white" />
            </a>
            <a target="_blank"
              href="https://www.pinterest.com/designatedlocalexpertnetwork/"
              className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors"
              title="Pinterest"
            >
              <FaPinterestP className="w-5 h-5 text-white" />
            </a>
            <a target="_blank"
              href="https://www.google.com/maps/place/Designated+Local+Expert/@46.423669,-129.9427086,3z/data=!4m6!3m5!1s0x6550104a4fb84ced:0x1afdd9b2892d3516!8m2!3d46.423669!4d-129.9427086!16s%2Fg%2F11kp_27w34?sa=X&ved=1t:2428&ictx=111&entry=tts&g_ep=EgoyMDI0MDUwNy4xKgBIAVAD"
              className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              title="Google Maps"
            >
              <FaMapMarkerAlt className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-8 pt-4 border-t border-gray-700 text-xs text-gray-400 text-center">
          <p>
            Disclaimer: Designated Local Expert is an Equal Opportunity Employer and
            supports the Fair Housing Act and equal opportunity housing. If you have a disability
            that is preventing you from experiencing this website, call
          </p>
        </div>

        {/* Theme Switcher - positioned in top right */}
        <div className="absolute top-4 right-4">
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}