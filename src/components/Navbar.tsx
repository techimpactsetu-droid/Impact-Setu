"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "Process", href: "/process" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={true}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors relative ${
                    isActive
                      ? "text-[#B58A63]"
                      : "text-[#5C4D44] hover:text-[#B58A63] dark:text-slate-350 dark:hover:text-[#B58A63]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBorder"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#B58A63]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions: CTA + Hamburger */}
          <div className="flex items-center gap-3">

            <Link href="/contact" className="hidden sm:inline-flex">
              <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#4E3629] to-[#8B5A2B] hover:from-[#3D271D] hover:to-[#704825] text-white font-medium text-sm transition-all duration-200 shadow-md hover:shadow-amber-955/20 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 cursor-pointer">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-amber-500/5 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={link.name}
                  >
                    <Link
                      href={link.href}
                      prefetch={true}
                      className={`block px-3 py-3 rounded-lg text-base font-semibold transition-colors ${
                        isActive
                          ? "bg-amber-500/10 text-[#B58A63] dark:bg-amber-950/20"
                          : "text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4 px-3"
              >
                <Link href="/contact" className="block w-full">
                  <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#4E3629] to-[#8B5A2B] hover:from-[#3D271D] hover:to-[#704825] text-white font-semibold text-center shadow-lg transition-colors cursor-pointer flex items-center justify-center gap-2">
                    Book Consultation
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
