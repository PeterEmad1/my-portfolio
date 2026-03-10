"use client";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

export default function SideVelocityText() {
  return (
    <>
      {/* LEFT SIDE */}
      <div className="fixed left-0 top-0 h-screen w-24 flex items-center justify-center overflow-hidden z-10 pointer-events-none">
        <ScrollVelocityContainer className="-rotate-90 w-[200vh]">
          <ScrollVelocityRow baseVelocity={5}>
            <span className="mx-16 text-3xl md:text-4xl font-semibold tracking-[0.4em] text-purple-400/80">
              .OPEN TO WORK.
            </span>
            <span className="mx-16 text-3xl md:text-4xl font-semibold tracking-[0.4em] text-white/70">
              .OPEN TO WORK.
            </span>
            <span className="mx-16 text-3xl md:text-4xl font-semibold tracking-[0.4em] text-purple-400/80">
              .OPEN TO WORK.
            </span>
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>

      {/* RIGHT SIDE */}
      <div className="fixed right-0 top-0 h-screen w-24 flex items-center justify-center overflow-hidden z-10 pointer-events-none">
        <ScrollVelocityContainer className="rotate-90 w-[200vh]">
          <ScrollVelocityRow baseVelocity={-5}>
            <span className="mx-16 text-3xl md:text-4xl font-semibold tracking-[0.4em] text-white/70">
              .OPEN TO WORK.
            </span>
            <span className="mx-16 text-3xl md:text-4xl font-semibold tracking-[0.4em] text-purple-400/80">
              .OPEN TO WORK.
            </span>
            <span className="mx-16 text-3xl md:text-4xl font-semibold tracking-[0.4em] text-white/70">
              .OPEN TO WORK.
            </span>
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>
    </>
  );
}