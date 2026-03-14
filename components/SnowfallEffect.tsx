"use client";

import { Snowfall } from "@namnguyenthanhwork/react-snowfall-effect";
import { useEffect, useState } from "react";

export default function SnowfallEffect() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Deep background — tiny, slow, barely visible */}
      <Snowfall
        snowflakeCount={isMobile ? 20 : 50}
        size={{ min: 1, max: 3 }}
        speed={{ min: 0.2, max: 0.5 }}
        wind={{ min: -0.3, max: 0.3 }}
        opacity={{ min: 0.1, max: 0.25 }}
      />

      {/* Mid layer — medium, soft drift */}
      <Snowfall
        snowflakeCount={isMobile ? 15 : 35}
        size={{ min: 3, max: 6 }}
        speed={{ min: 0.5, max: 1.2 }}
        wind={{ min: -0.5, max: 0.5 }}
        opacity={{ min: 0.3, max: 0.55 }}
      />

      {/* Foreground — large, fast, follow mouse on desktop only */}
      {!isMobile && (
        <Snowfall
          snowflakeCount={20}
          size={{ min: 6, max: 12 }}
          speed={{ min: 0.8, max: 1.8 }}
          wind={{ min: -0.8, max: 0.8 }}
          followMouse
          opacity={{ min: 0.6, max: 0.9 }}
        />
      )}

      {/* Mobile foreground — no followMouse (laggy on mobile) */}
      {isMobile && (
        <Snowfall
          snowflakeCount={10}
          size={{ min: 5, max: 10 }}
          speed={{ min: 0.8, max: 1.6 }}
          wind={{ min: -0.5, max: 0.5 }}
          opacity={{ min: 0.5, max: 0.85 }}
        />
      )}
    </div>
  );
}