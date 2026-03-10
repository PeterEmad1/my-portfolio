"use client";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "./ui/scroll-based-velocity";

export default function ScrollText() {
  return (
    <ScrollVelocityContainer className="py-20">
      <ScrollVelocityRow baseVelocity={5}>
        <span className="mx-8 text-5xl md:text-7xl font-bold text-white">
          NEXT.JS
        </span>
        <span className="mx-8 text-5xl md:text-7xl font-bold text-purple-500">
          DEVELOPER
        </span>
        <span className="mx-8 text-5xl md:text-7xl font-bold text-white">
          TYPESCRIPT
        </span>
      </ScrollVelocityRow>

      <ScrollVelocityRow baseVelocity={-5}>
        <span className="mx-8 text-5xl md:text-7xl font-bold text-purple-500">
          CREATIVE
        </span>
        <span className="mx-8 text-5xl md:text-7xl font-bold text-white">
          PORTFOLIO
        </span>
        <span className="mx-8 text-5xl md:text-7xl font-bold text-purple-500">
          FRONTEND
        </span>
      </ScrollVelocityRow>
    </ScrollVelocityContainer>
  );
}
