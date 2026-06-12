"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <Link href="/" className="inline-block cursor-pointer z-10 relative" aria-label="Go to homepage">
              <Logo className="h-6 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            </Link>
            <span className="text-slate-300 dark:text-slate-800 hidden sm:inline">|</span>
            <p className="text-[#5D4D44] dark:text-slate-400 text-xs font-medium">
              © {new Date().getFullYear()} ImpactSetu. All rights reserved.
            </p>
          </div>

          {/* Minimal Links & Socials */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-[#5D4D44] dark:text-slate-400 font-medium tracking-wide">
            <Link href="/services" className="hover:text-[#B58A63] transition-colors">Services</Link>
            <Link href="/portfolio" className="hover:text-[#B58A63] transition-colors">Portfolio</Link>
            <Link href="/pricing" className="hover:text-[#B58A63] transition-colors">Pricing</Link>
            <Link href="/contact" className="hover:text-[#B58A63] transition-colors">Contact</Link>
            <span className="text-slate-200 dark:text-slate-800 hidden sm:inline mx-1">|</span>
            <Link href="/privacy-policy" className="hover:text-[#B58A63] transition-colors text-slate-400">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#B58A63] transition-colors text-slate-400">Terms</Link>
            
            {/* Simple Social Icons */}
            <div className="flex items-center gap-4 ml-0 sm:ml-2 pl-0 sm:pl-6 border-l-0 sm:border-l border-slate-200 dark:border-slate-800">
              <a href="https://www.linkedin.com/company/impact-setu/" target="_blank" rel="noopener noreferrer" className="hover:text-[#B58A63] transition-colors" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-[#B58A63] transition-colors" aria-label="Instagram">
                <svg className="h-4 w-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
