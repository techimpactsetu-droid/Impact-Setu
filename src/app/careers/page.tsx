"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { PageWrapper } from "@/components/PageWrapper";
import { CheckCircle, Briefcase, Clock, MapPin, Sparkles } from "lucide-react";

const jobSchema = zod.object({
  name: zod.string().min(2, "Name must be at least 2 characters"),
  email: zod.string().email("Please enter a valid email address"),
  phone: zod.string().min(10, "Phone number must be at least 10 digits"),
  role: zod.string().min(1, "Please select a role"),
  portfolio: zod.string().url("Please enter a valid portfolio URL").or(zod.string().length(0)),
  coverLetter: zod.string().min(20, "Please introduce yourself (min 20 characters)"),
});

type JobFormInputs = zod.infer<typeof jobSchema>;

const openRoles = [
  {
    title: "Client Outreach Specialist",
    dept: "Sales & Growth",
    type: "Full-Time",
    location: "Remote / Hybrid",
    experience: "0-2 Years",
  },
];

const benefits = [
  {
    title: "100% Remote / Hybrid",
    desc: "Work from the comfort of your home or join our hubs. We value output, not office hours.",
  },
  {
    title: "Impact Projects",
    desc: "You will build donation portals, education platforms, and local cafe menus. Your code makes a visible impact.",
  },
  {
    title: "Constant Upskilling",
    desc: "Get access to courses, design libraries, and modern code bases (Next.js 15, Framer Motion, GSAP).",
  },
];

export default function Careers() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<JobFormInputs>({
    resolver: zodResolver(jobSchema),
  });

  const onSubmit = async (data: JobFormInputs) => {
    setIsLoading(true);
    setErrorMsg("");
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setIsSubmitted(true);
        reset();
        setSelectedRole("");
        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        const err = await res.json();
        setErrorMsg(err.error || "Something went wrong.");
      }
    } catch (error) {
      setErrorMsg("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplyNow = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    setValue("role", roleTitle);
    // Smooth scroll to application form
    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-20 bg-[#FDFBF7]/50 dark:bg-slate-950 text-[#2C1E15] dark:text-white border-b border-slate-200/50 dark:border-slate-800/50 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 dark:opacity-50" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-900/10 dark:border-[#B58A63]/30 bg-amber-50/60 dark:bg-amber-950/10 text-[#4E3629] dark:text-[#D4B895] text-xs font-semibold uppercase tracking-wider shadow-sm">
            Join Our Team
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Build the Bridge with Us
          </h1>
          <p className="text-slate-655 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            We are looking for creative developers, marketers, and designers to help local organizations grow online.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-transparent transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[#B58A63] font-bold text-xs uppercase tracking-widest">
              Work Culture
            </h2>
            <h3 className="text-3xl font-extrabold text-[#2C1E15] dark:text-white">
              Why You&apos;ll Love Working Here
            </h3>
            <div className="h-1 w-20 bg-[#B58A63] mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-8 rounded-3xl bg-white/60 dark:bg-zinc-900/40 border border-slate-200/50 dark:border-zinc-850 backdrop-blur-md transition-all duration-300 hover:border-[#B58A63]/30 hover:scale-[1.02] shadow-sm"
              >
                <h4 className="font-bold text-[#2C1E15] dark:text-white text-base mb-3 flex items-center gap-2">
                  <Sparkles className="h-4.5 w-4.5 text-[#B58A63] shrink-0" />
                  {b.title}
                </h4>
                <p className="text-slate-655 dark:text-slate-400 text-xs leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings Section */}
      <section className="py-20 bg-transparent transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[#B58A63] font-bold text-xs uppercase tracking-widest">
              Join Us
            </h2>
            <h3 className="text-3xl font-extrabold text-[#2C1E15] dark:text-white">
              Current Open Openings
            </h3>
            <div className="h-1 w-20 bg-[#B58A63] mx-auto rounded-full mt-2" />
          </div>

          <div className="space-y-6">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="p-6 rounded-2xl bg-white/60 dark:bg-zinc-900/40 border border-slate-200/50 dark:border-zinc-855 backdrop-blur-md shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all duration-300 hover:shadow-md hover:border-[#B58A63]/30 hover:scale-[1.01] group"
              >
                <div className="space-y-2">
                  <h4 className="font-bold text-[#2C1E15] dark:text-white text-base group-hover:text-[#B58A63] transition-colors">
                    {role.title}
                  </h4>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-3.5 w-3.5 text-slate-450" />
                      {role.dept}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-slate-450" />
                      {role.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-slate-450" />
                      {role.location}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleApplyNow(role.title)}
                  className="px-5 py-2.5 rounded-xl bg-[#B58A63] hover:bg-[#3D271D] text-white font-bold text-xs uppercase tracking-wide transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-sm shadow-amber-950/5 shrink-0"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="apply-form" className="py-20 bg-transparent transition-colors duration-300 scroll-mt-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white/60 dark:bg-zinc-900/40 border border-slate-200/50 dark:border-zinc-850 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#2C1E15] dark:text-white mb-2 text-center">
              Submit Your Candidacy
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs text-center mb-8 font-semibold">
              Fill out the form below. Our operations team will respond in 48 hours.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-350">
                  Full Name
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

              {/* Grid: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-355">
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
              </div>

              {/* Selection Role */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-350">
                  Role Applied For
                </label>
                <select
                  {...register("role")}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-[#B58A63] transition-all text-slate-800 dark:text-slate-200"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  <option value="">Select a role...</option>
                  <option value="Client Outreach Specialist">Client Outreach Specialist</option>
                </select>
                {errors.role && (
                  <p className="text-red-500 text-[11px] font-semibold pl-1">
                    {errors.role.message}
                  </p>
                )}
              </div>

              {/* Portfolio url */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-350">
                  Portfolio Link (Optional)
                </label>
                <input
                  type="text"
                  placeholder="https://mywork.com"
                  {...register("portfolio")}
                  className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-[#B58A63] transition-all ${
                    errors.portfolio ? "border-red-500 focus:ring-red-500" : ""
                  }`}
                />
                {errors.portfolio && (
                  <p className="text-red-500 text-[11px] font-semibold pl-1">
                    {errors.portfolio.message}
                  </p>
                )}
              </div>

              {/* Cover intro */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-350">
                  Why do you want to join ImpactSetu?
                </label>
                <textarea
                  rows={4}
                  placeholder="Introduce yourself and your experience..."
                  {...register("coverLetter")}
                  className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-[#B58A63] transition-all ${
                    errors.coverLetter ? "border-red-500 focus:ring-red-500" : ""
                  }`}
                />
                {errors.coverLetter && (
                  <p className="text-red-500 text-[11px] font-semibold pl-1">
                    {errors.coverLetter.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#B58A63] to-[#DEB887] hover:from-[#3D271D] hover:to-[#704825] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-md shadow-amber-950/5 flex items-center justify-center gap-1 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Submitting..." : "Submit Application"}
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
                  Application submitted successfully!
                </div>
              )}

            </form>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}
