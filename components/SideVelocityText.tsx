"use client";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

export default function SideVelocityText() {
  return (
    <>
      {/* DESKTOP SIDE TEXT */}
      <div className="hidden lg:block">
        {/* LEFT */}
        <div className="fixed left-0 top-0 h-screen w-24 flex items-center justify-center overflow-hidden pointer-events-none z-10">
          <ScrollVelocityContainer className="-rotate-90 w-[200vh]">
            <ScrollVelocityRow baseVelocity={5}>
              <span className="mx-16 text-3xl font-semibold tracking-[0.4em] text-purple-400/80">
                .OPEN TO WORK.
              </span>
              <span className="mx-16 text-3xl font-semibold tracking-[0.4em] text-white/70">
                .OPEN TO WORK.
              </span>
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </div>

        {/* RIGHT */}
        <div className="fixed right-0 top-0 h-screen w-24 flex items-center justify-center overflow-hidden pointer-events-none z-10">
          <ScrollVelocityContainer className="rotate-90 w-[200vh]">
            <ScrollVelocityRow baseVelocity={-5}>
              <span className="mx-16 text-3xl font-semibold tracking-[0.4em] text-white/70">
                .OPEN TO WORK.
              </span>
              <span className="mx-16 text-3xl font-semibold tracking-[0.4em] text-purple-400/80">
                .OPEN TO WORK.
              </span>
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </div>
      </div>

      {/* MOBILE / TABLET VERSION */}
      <div className="lg:hidden w-full overflow-hidden py-6">
        <ScrollVelocityContainer>
          <ScrollVelocityRow baseVelocity={5}>
            <span className="mx-10 text-2xl font-semibold tracking-[0.3em] text-purple-400/80">
              .OPEN TO WORK.
            </span>
            <span className="mx-10 text-2xl font-semibold tracking-[0.3em] text-white/70">
              .OPEN TO WORK.
            </span>
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>
    </>
  );
}
