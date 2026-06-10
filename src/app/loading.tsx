import React from "react";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh] w-full">
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#B58A63] blur-xl opacity-20 rounded-full animate-pulse" />
        {/* Spinner */}
        <Loader2 className="h-10 w-10 text-[#B58A63] animate-spin relative z-10" />
      </div>
      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 font-medium animate-pulse">
        Loading...
      </p>
    </div>
  );
}
