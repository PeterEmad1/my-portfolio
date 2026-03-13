import { Spotlight } from "@/components/ui/spotlight";
import { GridBackgroundDemo } from "./ui/grid-background";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import VenomHover from "./ui/VenomHover";
import { MagicButton } from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="relative min-h-[50vh] md:min-h-[70vh] w-full flex flex-col items-center justify-start overflow-x-hidden">
      {/* spotlight effects */}
      <div className="absolute inset-0 z-10 pointer-events-none">
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
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <GridBackgroundDemo />
      </div>

      {/* venom image */}
      <div className="z-20 mt-10">
        <VenomHover />
      </div>

      {/* hero content */}
      <div className="z-20 flex flex-col items-center text-center mt-10 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
        <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
          Welcome to my portfolio
        </h2>

        <TextGenerateEffect
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4"
          words="Tranforming Concepts into Seamless User Experiences"
        />

        <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Hi, i&apos;m{" "}
          <span className="text-blue-100">
            Peter, a Next.js Developer based in Egypt
          </span>
        </p>

        <a href="/peter-emad-cv.pdf" download>
          <MagicButton
            title="Download CV"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
