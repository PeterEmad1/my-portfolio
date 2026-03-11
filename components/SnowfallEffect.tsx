"use client";

import { Snowfall } from "@namnguyenthanhwork/react-snowfall-effect";

export default function SnowfallEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">

      {/* Background tiny snow */}
      <Snowfall
        snowflakeCount={40}
        size={{ min: 2, max: 4 }}
        speed={{ min: 0.3, max: 0.8 }}
        wind={{ min: -0.2, max: 0.2 }}
        opacity={{ min: 0.2, max: 0.4 }}
      />

      {/* Mid layer snow */}
      <Snowfall
        snowflakeCount={35}
        size={{ min: 4, max: 8 }}
        speed={{ min: 0.6, max: 1.4 }}
        wind={{ min: -0.4, max: 0.4 }}
        opacity={{ min: 0.4, max: 0.7 }}
      />

      {/* Foreground snow */}
      <Snowfall
        snowflakeCount={25}
        size={{ min: 8, max: 14 }}
        speed={{ min: 1, max: 2 }}
        wind={{ min: -0.6, max: 0.6 }}
        followMouse
        opacity={{ min: 0.7, max: 1 }}
      />

    </div>
  );
}