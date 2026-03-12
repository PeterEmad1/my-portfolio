"use client";

import Image from "next/image";
import { useState } from "react";

export default function VenomHover() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const updatePosition = (x: number, y: number, rect: DOMRect) => {
    setPos({
      x: x - rect.left,
      y: y - rect.top,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    updatePosition(e.clientX, e.clientY, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    updatePosition(touch.clientX, touch.clientY, rect);
  };

  const getRadius = () => {
    if (!hover) return 0;

    if (typeof window !== "undefined") {
      const w = window.innerWidth;

      if (w < 640) return 120;
      if (w < 768) return 140;
      if (w < 1024) return 170;
      return 200;
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
        touch-none
      "
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={() => setHover(true)}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setHover(false)}
    >
      <Image
        src="/face.jpeg"
        alt="profile"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />

      <Image
        src="/venom.jpg"
        alt="venom"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        style={{
          maskImage: `radial-gradient(circle ${radius}px at ${pos.x}px ${pos.y}px, black 50%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle ${radius}px at ${pos.x}px ${pos.y}px, black 50%, transparent 100%)`,
        }}
      />
    </div>
  );
}
