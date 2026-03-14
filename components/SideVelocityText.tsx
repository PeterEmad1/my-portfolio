"use client";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

export default function SideVelocityText() {
  return (
    <>
      {/* DESKTOP SIDE TEXT */}
      <div className="max-[1440px]:hidden">
        {/* LEFT */}
        <div className="fixed left-0 top-0 h-screen w-20 flex items-center justify-center overflow-hidden pointer-events-none z-10 bg-[#0f172a] font-bold italic">
          <ScrollVelocityContainer className="-rotate-90 w-[200vh]">
            <ScrollVelocityRow baseVelocity={-8}>
              <span className="mx-5 text-3xl font-bold italic tracking-[0.4em] text-purple-400/80 ">
                • OPEN TO WORK •
              </span>
              <span className="mx-5 text-3xl font-bold italic tracking-[0.4em] text-white/70">
                • OPEN TO WORK •
              </span>
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </div>

        {/* RIGHT */}
        <div className="fixed right-0 top-0 h-screen w-20 flex items-center justify-center overflow-hidden pointer-events-none z-10 bg-[#0f172a] ">
          <ScrollVelocityContainer className="rotate-90 w-[200vh]">
            <ScrollVelocityRow baseVelocity={-8}>
              <span className="mx-5 text-3xl font-bold italic tracking-[0.4em] text-white/70">
                • OPEN TO WORK •
              </span>
              <span className="mx-5 text-3xl font-bold italic tracking-[0.4em] text-purple-400/80">
                • OPEN TO WORK •
              </span>
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </div>
      </div>

      {/* MOBILE / TABLET VERSION */}
      <div className="hidden max-[1440px]:block w-full overflow-hidden py-6 bg-[#0f172a]">
        <ScrollVelocityContainer>
          <ScrollVelocityRow baseVelocity={8}>
            <span className="mx-2.5 text-2xl font-bold italic font-it tracking-[0.3em] text-purple-400/80">
              •OPEN TO WORK•
            </span>
            <span className="mx-2.5 text-2xl font-bold italic tracking-[0.3em] text-white/70">
              •OPEN TO WORK•
            </span>
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>
    </>
  );
}
