"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 rounded-lg bg-amber-500/5 dark:bg-slate-800/50" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 h-9 w-9 flex items-center justify-center rounded-lg text-slate-700 dark:text-slate-300 hover:bg-amber-500/5 dark:hover:bg-slate-800/50 border border-slate-200/50 dark:border-slate-800/50 transition-colors cursor-pointer"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun className="h-[1.1rem] w-[1.1rem] text-orange-400 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="h-[1.1rem] w-[1.1rem] text-slate-700 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
