"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, User, ArrowRight, X } from "lucide-react";

interface Post {
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string;
}

const blogPosts: Post[] = [
  {
    title: "5 Local SEO Strategies to Grow Your Clinic or Cafe",
    category: "SEO",
    date: "June 05, 2026",
    author: "Tejas Jain",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
    excerpt: "Learn how neighborhood map packs and keyword setups drive foot traffic to your physical store.",
    content: "If you operate a local clinic, cafe, CA firm, or retail store, Google Maps is your single most important digital acquisition channel. Local SEO ensures you rank at the very top of search results when someone type 'best cafe near me' or 'physiotherapy clinic near me'. In this article, we break down five actionable steps: 1. Complete your Google Business profile details. 2. Collect verified customer reviews systematically. 3. Target geo-specific local keywords in your content. 4. Configure local schema markup in your website header. 5. Maintain NAP (Name, Address, Phone) consistency across the web. Implementing these correctly will immediately grow foot traffic without running expensive performance ads.",
  },
  {
    title: "Domain and Hosting Guide for NGOs and Trusts",
    category: "NGO",
    date: "May 28, 2026",
    author: "Priyansh Jain",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop",
    excerpt: "Setting up domain registries, secure SSL certificates, and fast hosting servers on pocket-friendly budgets.",
    content: "NGOs and trusts need a digital presence that builds trust and receives donations securely. The technical backend can often feel intimidating. In this guide, we simplify the process: 1. Buying a Domain: Prefer `.org` or `.org.in` extensions to establish immediate non-profit credibility. 2. Secure SSL: Ensure your site uses `https` to protect payment inputs. 3. Server Hosting: Use cloud hosting or static platforms (like Vercel) which offer lightning-fast page loading speeds and zero hosting maintenance overheads. 4. Integrated Donation Bridges: Setup Razorpay or Stripe to receive funds instantly and generate tax-deductible receipts.",
  },
  {
    title: "Why We Build Agency Websites Using Next.js 15",
    category: "Next.js",
    date: "May 12, 2026",
    author: "ImpactSetu Tech Team",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    excerpt: "Discover the performance and SEO benefits of static server rendering in modern web frameworks.",
    content: "In modern agency web design, site speed is directly tied to business revenue. Next.js 15 combined with React 19 provides state-of-the-art server-side rendering (SSR) and static site generation (SSG). This means your visitors download pre-rendered, lightweight HTML rather than waiting for large Javascript bundles to compile. This guarantees: 1. Extreme Lighthouse SEO scores. 2. Instant page transition timings. 3. Full responsive scaling. 4. Enhanced indexability for Google spiders. We use Next.js for all our professional and premium website tiers to guarantee our clients receive a world-class platform.",
  },
  {
    title: "Social Media Strategies for Coaching Institutes",
    category: "Marketing",
    date: "April 30, 2026",
    author: "Tejas Jain",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop",
    excerpt: "How to use Instagram grid designs and LinkedIn articles to capture parent and student leads.",
    content: "Coaching centers and academies cannot rely purely on newspaper flyers anymore. To capture student admissions, you must build visual credibility online. Parents and students check your Instagram grids, LinkedIn profiles, and Google reviews before scheduling a visit. Our recommended playbook: 1. Post weekly video snippets of class lectures. 2. Share clean student success stories with charts. 3. Setup downloadable resource gates (PDF test series, sample notes) to collect phone numbers. 4. Run localized Instagram reels ads targeted to parents within a 5km radius. A consistent social media strategy builds authority and reduces student acquisition costs.",
  },
];

const tags = ["All", "SEO", "NGO", "Next.js", "Marketing"];

export function BlogCatalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [activePost, setActivePost] = useState<Post | null>(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === "All" || post.category === selectedTag;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="space-y-12">
      {/* Search Bar & Tag Selector Row */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        
        {/* Search */}
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search insights & guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-[#B58A63] text-sm transition-all"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {tags.map((tag) => {
            const isActive = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`relative px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer duration-300 ${
                  isActive
                    ? "text-white shadow-sm"
                    : "bg-amber-500/5/50 hover:bg-amber-500/10/50 dark:bg-zinc-900/50 dark:hover:bg-zinc-800/50 text-slate-700 dark:text-slate-300"
                }`}
              >
                <span className="relative z-10">{tag}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeBlogTag"
                    className="absolute inset-0 bg-[#4E3629] dark:bg-[#B58A63] rounded-lg z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </button>
            );
          })}
        </div>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPosts.map((post, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            key={post.title}
            className="group flex flex-col sm:flex-row rounded-3xl bg-white/70 dark:bg-[#241710]/40 border border-amber-900/10 dark:border-zinc-800/40 backdrop-blur-md overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-amber-950/5 hover:border-[#B58A63]/30 hover:scale-[1.02] transition-all duration-300"
          >
            {/* Image */}
            <div className="w-full sm:w-2/5 h-48 sm:h-auto relative overflow-hidden bg-slate-200 dark:bg-slate-900 shrink-0">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 text-[9px] font-extrabold uppercase tracking-wider text-[#B58A63] bg-white dark:bg-[#241710] px-2.5 py-1 rounded-md shadow-sm border border-amber-900/20 dark:border-amber-805/30">
                {post.category}
              </span>
            </div>

            {/* Content */}
            <div className="w-full sm:w-3/5 p-6 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex gap-4 text-[10px] text-[#8C7A6B] dark:text-slate-450 font-bold uppercase tracking-wide">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </span>
                </div>
                
                <h3 className="font-extrabold text-base text-[#2C1E15] dark:text-white group-hover:text-[#B58A63] transition-colors leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-[#5D4D44] dark:text-slate-400 text-xs leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <button
                onClick={() => setActivePost(post)}
                className="mt-6 text-xs text-[#B58A63] font-bold uppercase tracking-wider flex items-center gap-1 group/btn hover:text-[#4E3629] dark:hover:text-[#D4B895] transition-colors text-left cursor-pointer"
              >
                Read Article
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Reader Modal popup overlay */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#2C1E15]/60 dark:bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              className="bg-[#FDFBF7] dark:bg-[#241710] border border-amber-900/10 dark:border-zinc-800/60 rounded-3xl w-full max-w-2xl overflow-hidden shadow-xl max-h-[85vh] flex flex-col"
            >
              {/* Modal Image */}
              <div className="h-48 relative overflow-hidden bg-slate-200 dark:bg-slate-900 shrink-0">
                <img
                  src={activePost.image}
                  alt={activePost.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActivePost(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-[#2C1E15]/60 hover:bg-[#2C1E15] text-white transition-colors cursor-pointer"
                  aria-label="Close reader"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Scrollable details */}
              <div className="p-6 overflow-y-auto space-y-4">
                <div className="flex gap-4 text-[10px] text-[#8C7A6B] dark:text-slate-400 font-bold uppercase tracking-wide">
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-[#B58A63] border border-amber-500/20">
                    {activePost.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {activePost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {activePost.author}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-[#2C1E15] dark:text-white leading-tight">
                  {activePost.title}
                </h2>

                <p className="text-[#5D4D44] dark:text-slate-350 text-sm leading-relaxed whitespace-pre-wrap font-medium">
                  {activePost.content}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
