"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState("rotateX(0deg)");

  const onMouseEnter = () => {
    setTransform("rotateX(40deg) scale(0.9)");
  };

  const onMouseLeave = () => {
    setTransform("rotateX(0deg) scale(1)");
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("relative group/pin block w-full", containerClassName)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div style={{ perspective: "1000px" }} className="relative w-full">
        <div
          style={{ transform }}
          className="w-full p-4 flex flex-col rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/10 group-hover/pin:border-white/20 transition duration-500 overflow-hidden bg-black/40"
        >
          <div className={cn("relative z-50 w-full", className)}>
            {children}{" "}
          </div>{" "}
        </div>{" "}
      </div>

      <PinPerspective title={title} />
    </a>
  );
};

export const PinPerspective = ({ title }: { title?: string }) => {
  return (
    <motion.div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 transition duration-500">
      {" "}
      <div className="relative w-full h-full flex items-center justify-center">
        {title && (
          <div className="absolute top-0">
            <span className="rounded-full bg-zinc-950 py-1 px-4 text-xs font-bold text-white ring-1 ring-white/10">
              {title}
            </span>
          </div>
        )}
        {[0, 2, 4].map((delay, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0.5, 0], scale: 1 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay,
            }}
            className="absolute h-44 w-44 rounded-full bg-sky-500/10"
          />
        ))}
        <motion.div className="absolute bottom-0 w-px h-24 bg-linear-to-b from-transparent to-cyan-500 group-hover/pin:h-40 blur-[2px]" />
      </div>
    </motion.div>
  );
};
