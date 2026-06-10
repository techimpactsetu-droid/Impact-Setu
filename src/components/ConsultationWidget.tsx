"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, X, CheckCircle2, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  orgType: z.string().min(1, "Please select an organization type"),
  message: z.string().min(10, "Please briefly describe your needs (min 10 chars)"),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function ConsultationWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormValues) => {
    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSuccess(true);
    reset();
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset success state after transition finishes
    setTimeout(() => setIsSuccess(false), 300);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-6 z-40 p-4 rounded-full bg-[#4E3629] text-white shadow-xl hover:shadow-[#4E3629]/30 border border-amber-900/20 cursor-pointer flex items-center justify-center"
        aria-label="Book a free digital consultation"
      >
        <CalendarDays className="h-6 w-6 text-[#B58A63]" />
      </motion.button>

      {/* Booking Form Dialog Panel */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-[#2C1E15]/60 dark:bg-black/80 backdrop-blur-sm"
            />

            {/* Content Card */}
            <motion.div
              initial={{ scale: 0.92, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 20, opacity: 0 }}
              className="relative w-full max-w-md bg-[#FDFBF7] dark:bg-[#241710] border border-amber-900/10 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-2xl p-6 md:p-8"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#2C1E15] dark:text-white flex items-center gap-2">
                    <CalendarDays className="h-5.5 w-5.5 text-[#B58A63]" />
                    Book Free Call
                  </h3>
                  <p className="text-xs text-[#8C7A6B] dark:text-slate-400 mt-1">
                    Get a personalized digital road-map in 20 minutes.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-655 hover:bg-amber-500/5 dark:hover:bg-zinc-850 cursor-pointer transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Form Content / Success State */}
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-8 space-y-4"
                  >
                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h4 className="text-lg font-bold text-[#2C1E15] dark:text-white">
                      Consultation Requested!
                    </h4>
                    <p className="text-xs text-[#5D4D44] dark:text-slate-400 max-w-xs mx-auto">
                      Our digital experts will reach out to you within 24 hours to schedule your strategy session.
                    </p>
                    <button
                      onClick={handleClose}
                      className="px-6 py-2.5 rounded-full bg-[#4E3629] text-white text-xs font-bold hover:bg-[#3D271D] cursor-pointer transition-colors mt-6"
                    >
                      Close Window
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4 text-left"
                  >
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#2C1E15] dark:text-white uppercase tracking-wider block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        {...register("name")}
                        className="w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-zinc-950 border-amber-900/15 dark:border-zinc-800 text-xs focus:outline-none focus:ring-1 focus:ring-[#B58A63] transition-colors"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-[10px] text-red-500 font-semibold">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#2C1E15] dark:text-white uppercase tracking-wider block">
                        Work Email
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        className="w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-zinc-950 border-amber-900/15 dark:border-zinc-800 text-xs focus:outline-none focus:ring-1 focus:ring-[#B58A63] transition-colors"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-[10px] text-red-500 font-semibold">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Organization Type */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#2C1E15] dark:text-white uppercase tracking-wider block">
                        Organization Type
                      </label>
                      <select
                        {...register("orgType")}
                        className="w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-zinc-950 border-amber-900/15 dark:border-zinc-800 text-xs focus:outline-none focus:ring-1 focus:ring-[#B58A63] transition-colors"
                      >
                        <option value="">Select Domain...</option>
                        <option value="startup">Startup / Business</option>
                        <option value="ngo">NGO / Trust</option>
                        <option value="coaching">Coaching / Academy</option>
                        <option value="cafe">Cafe / Diner</option>
                        <option value="clinic">Clinic / Healthcare</option>
                      </select>
                      {errors.orgType && (
                        <p className="text-[10px] text-red-500 font-semibold">{errors.orgType.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#2C1E15] dark:text-white uppercase tracking-wider block">
                        Brief Project Scope
                      </label>
                      <textarea
                        {...register("message")}
                        rows={3}
                        className="w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-zinc-950 border-amber-900/15 dark:border-zinc-800 text-xs focus:outline-none focus:ring-1 focus:ring-[#B58A63] transition-colors resize-none"
                        placeholder="What details can we assist you with?"
                      />
                      {errors.message && (
                        <p className="text-[10px] text-red-500 font-semibold">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#4E3629] to-[#8B5A2B] hover:from-[#3D271D] hover:to-[#704825] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-amber-950/20 flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Requesting Call..." : "Book Strategy Call"}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
