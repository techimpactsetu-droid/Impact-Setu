"use client";

import React from "react";
import { PageWrapper } from "@/components/PageWrapper";

export default function PrivacyPolicy() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 py-24 sm:py-32">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2C1E15] dark:text-white mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-[#5D4D44] dark:text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#2C1E15] dark:text-white mb-3">1. Introduction</h2>
            <p>
              Welcome to ImpactSetu. We respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              (impactsetu.com) or engage with our digital services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2C1E15] dark:text-white mb-3">2. Information We Collect</h2>
            <p className="mb-2">We may collect personal identification information from Users in a variety of ways, including, but not limited to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Contact Forms:</strong> Name, email address, phone number, organization name, budget, and project requirements.</li>
              <li><strong>Careers / Job Applications:</strong> Resumes, portfolios, cover letters, and professional history.</li>
              <li><strong>Automated Analytics:</strong> IP addresses, browser type, device information, and site usage data via cookies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2C1E15] dark:text-white mb-3">3. How We Use Your Information</h2>
            <p className="mb-2">ImpactSetu uses the collected information for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>To provide and maintain our services.</li>
              <li>To respond to your inquiries and support needs efficiently.</li>
              <li>To evaluate job applicants for employment opportunities.</li>
              <li>To send periodic emails regarding updates, proposals, or administrative notices.</li>
              <li>To improve our website design and user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2C1E15] dark:text-white mb-3">4. Information Protection</h2>
            <p>
              We adopt appropriate data collection, storage, and processing practices and security measures to protect 
              against unauthorized access, alteration, disclosure, or destruction of your personal information, username, 
              password, transaction information, and data stored on our Site. We never sell, trade, or rent your personal 
              identification information to others.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2C1E15] dark:text-white mb-3">5. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We do not control these sites and are not responsible 
              for their privacy policies or practices. We encourage you to read the privacy policies of any site you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2C1E15] dark:text-white mb-3">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
              <br/><strong>Email:</strong> <a href="mailto:info.impactsetu@gmail.com" className="text-[#B58A63] hover:underline">info.impactsetu@gmail.com</a>
              <br/><strong>Phone:</strong> +91 7703896811
              <br/><strong>Location:</strong> Dwarka, Delhi - 110045
            </p>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
}
