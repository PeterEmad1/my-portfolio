"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-5000 flex items-center justify-center",
        className,
      )}
    >
      <div
        className="
        flex items-center gap-1
        px-3 py-2
        rounded-full
        border border-white/10
        bg-black/40
        backdrop-blur-xl
        shadow-lg shadow-black/30
      "
      >
        {navItems.map((navItem, idx) => (
          <a
            key={idx}
            href={navItem.link}
            className="
              relative px-4 py-2
              text-sm font-medium
              text-white/70
              rounded-full
              transition-all duration-300
              hover:text-white
              hover:bg-white/10
              hover:scale-105
            "
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="sm:block cursor-pointer!">{navItem.name}</span>
          </a>
        ))}
      </div>
    </motion.div>
  );
};
