"use client";

import Image from "next/image";
import { useState } from "react";

export default function VenomHover() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getRadius = () => {
    if (!hover) return 0;

    if (typeof window !== "undefined") {
      const w = window.innerWidth;

      if (w < 640) return 80; // mobile
      if (w < 768) return 120; // small tablets
      if (w < 1024) return 160; // tablets
      return 200; // desktop
    }

    return 200;
  };

  const radius = getRadius();

  return (
    <div
      className="
  relative 
  w-28 sm:w-36 md:w-48 lg:w-64 xl:w-80
  aspect-108/154.5
  overflow-hidden
  rounded-xl
"
      onMouseMove={handleMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Face */}
      <Image src="/face.jpeg" alt="face" fill className="object-cover" />

      {/* Venom */}
      <Image
        src="/venom.jpg"
        alt="venom"
        fill
        className="object-cover"
        style={{
          maskImage: `radial-gradient(circle ${radius}px at ${pos.x}px ${pos.y}px, black 50%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle ${radius}px at ${pos.x}px ${pos.y}px, black 50%, transparent 100%)`,
        }}
      />
    </div>
  );
}
