"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false },
);

export default function GithubGraph() {
  const [size, setSize] = useState(15);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setSize(8); // mobile
      } else if (window.innerWidth < 1024) {
        setSize(11); // tablet
      } else {
        setSize(15); // desktop
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">
        My <span className="text-purple-500">GitHub Activity</span>
      </h1>

      <div className="flex justify-center overflow-x-auto">
        <GitHubCalendar
          username="PeterEmad1"
          blockSize={size}
          blockMargin={4}
          fontSize={14}
          theme={{
            dark: ["#161b22", "#2a0e61", "#4c1d95", "#7c3aed", "#c084fc"],
          }}
        />
      </div>
    </section>
  );
}
