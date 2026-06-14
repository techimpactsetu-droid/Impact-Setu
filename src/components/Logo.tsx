import React from "react";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <div className="flex items-center gap-2 select-none group cursor-pointer">
      <img
        src="/logo-final.png"
        alt="ImpactSetu Logo"
        className={`${className} object-contain transition-all duration-300 group-hover:scale-[1.03] dark:invert dark:brightness-125`}
      />
    </div>
  );
}
