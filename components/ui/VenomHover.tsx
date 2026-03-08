"use client";

import Image from "next/image";

export default function VenomHover() {
  return (
    <div className="relative w-[350px] h-[350px] group cursor-pointer overflow-hidden rounded-xl">
      {/* Face */}
      <Image src="/face.png" alt="face" fill className="object-cover" />

      {/* Venom */}
      <Image
        src="/venom.jpg"
        alt="venom"
        fill
        className="object-cover transition-all duration-700 
        scale-0 group-hover:scale-100"
      />
    </div>
  );
}
