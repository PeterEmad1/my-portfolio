"use client";

import { useEffect, useState } from "react";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // duration of loader

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-500 animate-pulse">
            Peter Emad
          </h1>

          <p className="mt-4 text-gray-400">Loading Portfolio...</p>

          <div className="mt-6 w-40 h-1 bg-gray-800 rounded overflow-hidden">
            <div className="h-full bg-purple-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
