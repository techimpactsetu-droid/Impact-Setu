"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Priyansh Jain",
    role: "Founder, CarePlus Clinic",
    industry: "Healthcare & Clinic",
    content:
      "ImpactSetu transformed our patient scheduling completely. They set up our Google Business profile, SEO, and appointment calendar. We've seen a 60% increase in online inquiries!",
    rating: 5,
  },
  {
    name: "Tejas Jain",
    role: "Director, Apex Academy",
    industry: "Education & Coaching",
    content:
      "We needed a landing page for our new coaching batches. The design is sleek, lighting fast, and optimized for mobiles. We received 200+ student signups in under two weeks!",
    rating: 5,
  },
  {
    name: "Rohan Mehra",
    role: "Founder, Hope Foundation Trust",
    industry: "NGO & Trust",
    content:
      "Building a trust website requires a balance of transparency and empathy. The team designed a donation bridge and impact showcase that our board and donors absolutely love.",
    rating: 5,
  },
  {
    name: "Sakshi Sen",
    role: "Owner, The Brew Corner Cafe",
    industry: "Cafe & Restaurant",
    content:
      "Our Local SEO rank went from unlisted to #2 in our area. The online menu with instant WhatsApp orders is a major hit among our weekend visitors. Highly recommend!",
    rating: 5,
  },
];

import { ScrollReveal } from "@/components/ScrollReveal";

export function Testimonials() {
  return (
    <section className="py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-[#B58A63] font-bold text-xs uppercase tracking-widest">
              Client Success
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#2C1E15] dark:text-white leading-tight">
              Hear From the <span className="font-serif font-normal italic text-[#B58A63] dark:text-[#D4B895]">Organizations</span> We Partner With
            </h3>
            <div className="h-1 w-20 bg-[#B58A63] mx-auto rounded-full mt-2" />
          </div>
        </ScrollReveal>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto px-4 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((test, index) => (
                <CarouselItem key={index} className="md:basis-1/2 animate-fade-in">
                  <div className="p-2 h-full">
                    <Card className="h-full bg-white/70 dark:bg-[#241710]/40 border border-amber-900/10 dark:border-zinc-800/40 backdrop-blur-md flex flex-col justify-between p-6 rounded-2xl relative overflow-hidden transition-all duration-300 hover:border-[#B58A63]/30 hover:shadow-xl hover:shadow-amber-950/5 hover:scale-[1.02]">
                      
                      {/* Quote Mark */}
                      <Quote className="absolute top-4 right-4 h-12 w-12 text-[#EBE3D5] dark:text-zinc-800/30 pointer-events-none" />

                      <div className="space-y-4 z-10">
                        {/* Rating Stars */}
                        <div className="flex gap-1">
                          {[...Array(test.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-[#B58A63] text-[#B58A63]"
                            />
                          ))}
                        </div>

                        {/* Content */}
                        <p className="text-[#5D4D44] dark:text-slate-400 text-sm leading-relaxed italic">
                          &ldquo;{test.content}&rdquo;
                        </p>
                      </div>

                      {/* User details */}
                      <div className="mt-6 pt-4 border-t border-amber-900/10 dark:border-slate-800 z-10">
                        <h4 className="font-bold text-sm text-[#2C1E15] dark:text-white">
                          {test.name}
                        </h4>
                        <div className="flex items-center justify-between text-xs text-[#8C7A6B] dark:text-slate-400 mt-1 font-semibold">
                          <span>{test.role}</span>
                          <span className="text-[#B58A63]">{test.industry}</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Controls */}
            <div className="hidden sm:block">
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-[#241710]/80 text-slate-700 dark:text-[#FAF0E6] border border-amber-900/10 dark:border-zinc-800 hover:bg-amber-50 hover:text-[#B58A63] dark:hover:bg-amber-950/20 backdrop-blur-sm shadow-sm" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-[#241710]/80 text-slate-700 dark:text-[#FAF0E6] border border-amber-900/10 dark:border-zinc-800 hover:bg-amber-50 hover:text-[#B58A63] dark:hover:bg-amber-950/20 backdrop-blur-sm shadow-sm" />
            </div>
          </Carousel>
        </div>

      </div>
    </section>
  );
}

