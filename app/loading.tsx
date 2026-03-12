"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-widest animate-pulse">
          PETER EMAD
        </h1>

        <p className="mt-4 text-purple-400 text-lg">Loading Portfolio{dots}</p>

        <div className="mt-6 w-40 h-1 bg-gray-800 rounded overflow-hidden">
          <div className="h-full bg-purple-500 animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
}
