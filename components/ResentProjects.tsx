"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

// ⭐ CHANGE THIS TO RESIZE CARDS
const CARD_SIZE = 582;

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      {" "}
      <h1 className="font-bold text-4xl md:text-5xl text-center px-4">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>{" "}
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 mt-12 max-w-400 mx-auto justify-items-center px-6">
        {projects.map((item) => (
          <div
            key={item.id}
            style={{ width: `${CARD_SIZE}px` }}
            className="flex items-center justify-center perspective-distant"
          >
            <PinContainer title={item.link} href={item.link}>
              {/* Image */}
              <div className="relative flex items-center justify-center w-full aspect-16/10 overflow-hidden mb-8">
                <div
                  className="relative w-full h-full overflow-hidden rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img
                    src="/bg.png"
                    alt="bgimg"
                    className="w-full h-full object-cover"
                  />
                </div>

                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 rotate-2 rounded-t-xl shadow-2xl w-[90%] h-full object-cover"
                />
              </div>

              {/* Title */}
              <h1 className="font-bold text-xl md:text-2xl line-clamp-1">
                {item.title}
              </h1>

              {/* Description */}
              <p
                className="text-sm md:text-lg font-light line-clamp-2 mt-3"
                style={{ color: "#BEC1DD" }}
              >
                {item.des}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/20 rounded-full bg-black w-8 h-8 md:w-10 md:h-10 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center">
                  <p className="text-purple text-sm md:text-base">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-2" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
