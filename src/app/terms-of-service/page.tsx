"use client";

import React from "react";
import { PageWrapper } from "@/components/PageWrapper";

export default function TermsOfService() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 py-24 sm:py-32">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2C1E15] dark:text-white mb-6">
          Terms of Service
        </h1>
        <p className="text-sm text-slate-500 mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-[#5D4D44] dark:text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#2C1E15] dark:text-white mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing and using ImpactSetu (impactsetu.com), you agree to be bound by these Terms of Service. 
              If you do not agree with any part of these terms, you may not access our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2C1E15] dark:text-white mb-3">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise stated, ImpactSetu and/or its licensors own the intellectual property rights for all 
              material, designs, graphics, and code on this website. All intellectual property rights are reserved. 
              You may access this from ImpactSetu for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            <p className="mt-2">You must not:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Republish material from ImpactSetu without permission</li>
              <li>Sell, rent or sub-license material from ImpactSetu</li>
              <li>Reproduce, duplicate or copy material from ImpactSetu</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2C1E15] dark:text-white mb-3">3. Service Proposals & Agreements</h2>
            <p>
              Any services requested through our contact forms or consultations are subject to a separate, customized 
              Service Level Agreement (SLA) or contract. The descriptions of services on this website (Web Development, 
              Marketing, Branding, etc.) are for informational purposes and do not constitute a legally binding contract 
              until a formal agreement is signed by both parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2C1E15] dark:text-white mb-3">4. User Content</h2>
            <p>
              When you submit data to us (via forms, emails, or applications), you grant us the right to review and store 
              that information for the purpose of communicating with you and providing our services. You warrant that any 
              information you provide is accurate and does not violate any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2C1E15] dark:text-white mb-3">5. Disclaimer of Warranties</h2>
            <p>
              This website is provided &quot;as is,&quot; with all faults, and ImpactSetu expresses no representations or warranties, 
              of any kind related to this website or the materials contained on this website. While we strive for excellence, 
              we do not guarantee that the website will be uninterrupted, error-free, or completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2C1E15] dark:text-white mb-3">6. Limitation of Liability</h2>
            <p>
              In no event shall ImpactSetu, nor any of its officers, directors, and employees, be held liable for anything 
              arising out of or in any way connected with your use of this website whether such liability is under contract. 
              ImpactSetu shall not be held liable for any indirect, consequential, or special liability arising out of or in 
              any way related to your use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2C1E15] dark:text-white mb-3">7. Governing Law</h2>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of Delhi, India, and you submit 
              to the non-exclusive jurisdiction of the state and federal courts located in Delhi for the resolution of any disputes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2C1E15] dark:text-white mb-3">8. Contact Details</h2>
            <p>
              If you have any questions or concerns regarding these terms, please contact us:
              <br/><strong>Email:</strong> <a href="mailto:info.impactsetu@gmail.com" className="text-[#B58A63] hover:underline">info.impactsetu@gmail.com</a>
              <br/><strong>Phone:</strong> +91 7703896811
            </p>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
}
