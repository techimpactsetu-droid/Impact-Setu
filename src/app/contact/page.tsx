"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { PageWrapper } from "@/components/PageWrapper";
import {
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

// Schema for contact form validation
const contactSchema = zod.object({
  name: zod.string().min(2, "Name must be at least 2 characters"),
  phone: zod.string().min(10, "Phone number must be at least 10 digits"),
  email: zod.string().email("Please enter a valid email address"),
  orgName: zod.string().min(2, "Organization name must be at least 2 characters"),
  service: zod.string().min(1, "Please select a service"),
  budget: zod.string().min(1, "Please select a budget range"),
  message: zod.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormInputs = zod.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formType, setFormType] = useState<"proposal" | "consultation">("proposal");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  // Pre-fill package if selected from pricing page
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const pkg = params.get("package");
      if (pkg) {
        // Find matching service option
        if (pkg.includes("Starter")) {
          setValue("service", "Website Development");
          setValue("budget", "₹6,999 - ₹10,999");
        } else if (pkg.includes("Growth")) {
          setValue("service", "Website Development");
          setValue("budget", "₹10,999 - ₹15,999");
        } else if (pkg.includes("Professional")) {
          setValue("service", "Website Development");
          setValue("budget", "₹15,999 - ₹26,999");
        } else if (pkg.includes("Premium")) {
          setValue("service", "Business Solutions");
          setValue("budget", "₹26,999+");
        }
      }
    }
  }, [setValue]);

  const onSubmit = async (data: ContactFormInputs) => {
    setIsLoading(true);
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType }),
      });
      if (res.ok) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        const err = await res.json();
        setErrorMsg(err.error || "Something went wrong.");
      }
    } catch {
      setErrorMsg("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-16 bg-[#FDFBF7]/50 dark:bg-slate-950 text-[#2C1E15] dark:text-white border-b border-slate-200/50 dark:border-slate-800/50 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 dark:opacity-50" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-900/10 dark:border-[#B58A63]/30 bg-amber-50/60 dark:bg-amber-950/10 text-[#4E3629] dark:text-[#D4B895] text-xs font-semibold uppercase tracking-wider shadow-sm">
            Connect
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Let&apos;s Start Building
          </h1>
          <p className="text-slate-655 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Contact our consulting desk below. Request a proposal deck or schedule an instant consultation call.
          </p>
        </div>
      </section>

      {/* Main Grid split */}
      <section className="py-16 bg-transparent transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column (Contact details & Calendly placeholder) */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
              <div className="space-y-3">
                <span className="text-[#B58A63] font-bold text-xs uppercase tracking-wider">
                  Contact Info
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2C1E15] dark:text-white leading-tight">
                  Reach Out Directly
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed max-w-md">
                  Have questions before starting? Connect with us via official channels or view our locations map.
                </p>
              </div>

              {/* Channels list */}
              <div className="space-y-4 text-sm font-semibold">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-zinc-900/40 border border-slate-200/50 dark:border-zinc-850 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-[#B58A63] flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-450 dark:text-slate-500">Phone Consultation</h4>
                    <a href="tel:+917703896811" className="text-[#2C1E15] dark:text-white hover:text-[#B58A63] transition-colors block">+91 7703896811</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-zinc-900/40 border border-slate-200/50 dark:border-zinc-855 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-[#B58A63] flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-450 dark:text-slate-500">General Inquiries</h4>
                    <a href="mailto:info.impactsetu@gmail.com" className="text-[#2C1E15] dark:text-white hover:text-[#B58A63] transition-colors block">info.impactsetu@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-zinc-900/40 border border-slate-200/50 dark:border-zinc-850 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-[#B58A63] flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-455 dark:text-slate-500">Location Desk</h4>
                    <p className="text-[#2C1E15] dark:text-white">Dwarka, Delhi - 110045</p>
                  </div>
                </div>
              </div>

              {/* Calendly Integration Placeholder */}
              <div className="p-6 rounded-2xl bg-[#B58A63]/5 border border-[#B58A63]/15 backdrop-blur-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#B58A63]">
                  <CalendarDays className="h-4 w-4" />
                  <span>Calendly Integration Preset</span>
                </div>
                <h4 className="font-bold text-[#2C1E15] dark:text-white text-sm">
                  Schedule a 1-on-1 Call Instantly
                </h4>
                <p className="text-slate-655 dark:text-slate-400 text-xs leading-relaxed">
                  Choose a direct meeting time with our consultants using this sandbox calendar pipeline link.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#B58A63] hover:text-[#4E3629] font-extrabold tracking-wider uppercase cursor-pointer"
                >
                  Open Booking Calendar
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column (Intake form card) */}
            <div className="lg:col-span-7 bg-white/60 dark:bg-zinc-900/40 border border-slate-200/50 dark:border-zinc-850 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
              {/* Top Selector Toggle */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <button
                  type="button"
                  onClick={() => setFormType("proposal")}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    formType === "proposal"
                      ? "bg-[#B58A63] text-white shadow-sm"
                      : "bg-amber-500/5 hover:bg-amber-500/10 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-350"
                  }`}
                >
                  Request Proposal
                </button>
                <button
                  type="button"
                  onClick={() => setFormType("consultation")}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    formType === "consultation"
                      ? "bg-[#B58A63] text-white shadow-sm"
                      : "bg-amber-500/5 hover:bg-amber-500/10 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-355"
                  }`}
                >
                  Book Consultation
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Grid: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-350">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter name"
                      {...register("name")}
                      className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-[#B58A63] transition-all ${
                        errors.name ? "border-red-500 focus:ring-red-500" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-[11px] font-semibold pl-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-350">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@email.com"
                      {...register("email")}
                      className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-[#B58A63] transition-all ${
                        errors.email ? "border-red-500 focus:ring-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[11px] font-semibold pl-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Grid: Phone & Org Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-350">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="10-digit number"
                      {...register("phone")}
                      className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-[#B58A63] transition-all ${
                        errors.phone ? "border-red-500 focus:ring-red-500" : ""
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-[11px] font-semibold pl-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-350">
                      Organization Name / Trust
                    </label>
                    <input
                      type="text"
                      placeholder="Company/Clinic/NGO Name"
                      {...register("orgName")}
                      className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-[#B58A63] transition-all ${
                        errors.orgName ? "border-red-500 focus:ring-red-500" : ""
                      }`}
                    />
                    {errors.orgName && (
                      <p className="text-red-500 text-[11px] font-semibold pl-1">
                        {errors.orgName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Grid: Service & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-350">
                      Service Required
                    </label>
                    <select
                      {...register("service")}
                      className="w-full px-4 py-2.5 text-sm rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-[#B58A63] transition-all text-slate-800 dark:text-slate-200"
                    >
                      <option value="">Select service...</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Social Media Management">Social Media Management</option>
                      <option value="Branding Services">Branding Services</option>
                      <option value="Business Solutions">Business Solutions</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-[11px] font-semibold pl-1">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-350">
                      Budget Range
                    </label>
                    <select
                      {...register("budget")}
                      className="w-full px-4 py-2.5 text-sm rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-[#B58A63] transition-all text-slate-800 dark:text-slate-200"
                    >
                      <option value="">Select budget...</option>
                      <option value="₹6,999 - ₹10,999">₹6,999 - ₹10,999 (Starter)</option>
                      <option value="₹10,999 - ₹15,999">₹10,999 - ₹15,999 (Growth)</option>
                      <option value="₹15,999 - ₹26,999">₹15,999 - ₹26,999 (Professional)</option>
                      <option value="₹26,999+">₹26,999+ (Premium Custom)</option>
                    </select>
                    {errors.budget && (
                      <p className="text-red-500 text-[11px] font-semibold pl-1">
                        {errors.budget.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-355">
                    Project Message / Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe what you'd like to build or achieve..."
                    {...register("message")}
                    className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-[#B58A63] transition-all ${
                      errors.message ? "border-red-500 focus:ring-red-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-[11px] font-semibold pl-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#B58A63] to-[#DEB887] hover:from-[#3D271D] hover:to-[#704825] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-md shadow-amber-950/5 flex items-center justify-center gap-1.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>
                      {isLoading ? "Sending..." : formType === "proposal" ? "Request Proposal" : "Book Consultation"}
                    </span>
                    {!isLoading && <ArrowRight className="h-4 w-4" />}
                  </button>
                  
                  {errorMsg && (
                    <div className="text-red-500 text-sm font-semibold text-center mt-3">
                      {errorMsg}
                    </div>
                  )}
                </div>

                {isSubmitted && (
                  <div className="flex items-center gap-1.5 text-emerald-500 text-sm font-semibold justify-center mt-4 animate-fade-in">
                    <CheckCircle className="h-4.5 w-4.5" />
                    Request submitted successfully! We will connect shortly.
                  </div>
                )}

              </form>
            </div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
