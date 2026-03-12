import { workExperience } from "@/data";
import { Button } from "./ui/moving-border";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        My <span className="text-purple">work experience</span>
      </h1>

      {/* FIXED: mx-auto instead of mx-50 to prevent squashing on mobile */}
      <div className="max-w-7xl mx-auto mt-12 grid lg:grid-cols-4 grid-cols-1 gap-6 md:gap-10 px-5">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              // FIXED: Use 'background' for gradients, not 'backgroundColor'
              background: "rgb(4,7,29)",
              backgroundImage: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            {/* MOBILE TWEAK: center items on mobile, row-align on desktop */}
            <div className="flex flex-col lg:flex-row lg:items-center p-6 md:p-5 lg:p-10 gap-4">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-20 w-16 mx-auto lg:mx-0"
              />
              <div className="lg:ms-5 text-center lg:text-start">
                <h1 className="text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-white-100 mt-3 font-bold text-sm md:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;