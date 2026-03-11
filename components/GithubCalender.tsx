"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="h-37.5 w-full animate-pulse bg-muted/20 rounded-xl" />
    ),
  },
);

export default function GithubGraph() {
  return (
    <section className="py-20 w-full bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          My <span className="text-purple">GitHub Activity</span>
        </h1>

        {/* SCROLL WRAPPER 
            - 'no-scrollbar' hides the bar.
            - 'mask-fade-edges' (from your CSS) makes the edges look smooth.
        */}
        <div className="relative w-full overflow-x-auto mask-fade-edges">
          <div className="w-full pb-8 pt-4 no-scrollbar scroll-smooth">
            <div className="inline-flex min-w-full justify-start md:justify-center px-10">
              <div className="p-6 border border-border rounded-3xl backdrop-blur-sm min-w-180">
                <GitHubCalendar
                  username="PeterEmad1"
                  blockSize={12}
                  blockMargin={5}
                  fontSize={14}
                  theme={{
                    // Using your purple variables for the intensity levels
                    dark: [
                      "#161b22",
                      "#2e1065",
                      "#5b21b6",
                      "#7c3aed",
                      "#a78bfa",
                    ],
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Swipe Hint */}
        <div className="flex flex-col items-center justify-center gap-2 mt-4 md:hidden">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground/50">
            Swipe to explore
          </span>
          <div className="w-12 h-0.5 bg-muted/30 rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-purple animate-slide" />
          </div>
        </div>
      </div>
    </section>
  );
}
