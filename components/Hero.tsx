import { Spotlight } from "@/components/ui/spotlight";
import { GridBackgroundDemo } from "./ui/grid-background";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import VenomHover from "./ui/VenomHover";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* spotlight effects */}
      <div className="absolute inset-0 z-10">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* grid background */}
      <div className="absolute inset-0 z-0">
        <GridBackgroundDemo />
      </div>

       {/* Venom hover image */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 z-20">
        <VenomHover />
      </div>

      {/* hero content */}
      <div className="relative z-20 flex-center h-full">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex-center flex-col">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic With Next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4"
            words="Tranforming Concepts into Seamless User Experiences"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            hi, i&apos;m{" "}
            <span className="text-blue-100">
              Peter, a Next.js Developer based in Egypt
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
