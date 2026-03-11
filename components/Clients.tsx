"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center leading-tight">
        Kind words from <br className="sm:hidden" />
        <span className="text-purple">Satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center mt-10 px-4 md:px-10">
        {/* Infinite moving testimonials (works on both mobile and desktop) */}
        <div className="w-full overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        {/* Company logos (optional section you commented before) */}
        {/*
        <div className="flex-center flex-wrap gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div
              key={id}
              className="flex items-center max-w-35 md:max-w-60 gap-2"
            >
              <img src={img} alt={name} className="md:w-10 w-5" />
              <img src={nameImg} alt={name} className="md:w-10 w-5" />
            </div>
          ))}
        </div>
        */}
      </div>
    </div>
  );
};

export default Clients;
