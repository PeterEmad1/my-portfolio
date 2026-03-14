"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";

const Approach = () => {
  // Track which card is active. Null means all are closed.
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const cards = [
    {
      title: "Planning & Strategy",
      order: "Phase 1",
      des: "We'll collaborate to map out your website's goals, target audience, and key functionalities.",
      effect: (
        <CanvasRevealEffect
          animationSpeed={5.1}
          containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
        />
      ),
    },
    {
      title: "Development & Progress Update",
      order: "Phase 2",
      des: "Once we agree on the plan, I cue my lofi playlist and dive into coding. I keep you updated every step of the way.",
      effect: (
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
          colors={[
            [255, 166, 158],
            [221, 255, 247],
          ]}
          dotSize={2}
        />
      ),
    },
    {
      title: "Development & Launch",
      order: "Phase 3",
      des: "This is where the magic happens! I'll translate everything into functional code, building your website from the ground up.",
      effect: (
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
          colors={[[125, 211, 252]]}
        />
      ),
    },
  ];

  return (
    <section className="w-full py-20 px-4">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        My <span className="text-purple">approach</span>
      </h1>
      <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            icon={<AceternityIcon order={card.order} />}
            des={card.des}
            isActive={activeIndex === index}
            onActivate={() => setActiveIndex(index)}
            onDeactivate={() => setActiveIndex(null)}
            onToggle={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          >
            {card.effect}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
  isActive,
  onActivate,
  onDeactivate,
  onToggle,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
  onToggle: () => void;
}) => {
  return (
    <div
      onPointerEnter={onActivate}
      // onPointerLeave={onDeactivate}
      // onPointerUp={onToggle}
      // onClick={onToggle}
      className="border border-black/20 flex items-center justify-center
  dark:border-white/10 max-w-sm w-full mx-auto p-4 relative
  h-95 lg:h-140 rounded-3xl overflow-hidden cursor-pointer"
      style={{ background: "#131313" }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-6 md:px-10 pointer-events-none">
        <div
          className="text-center absolute top-[50%] left-[50%] flex items-center justify-center min-w-40 mx-auto transition-all duration-300"
          style={{
            opacity: isActive ? 0 : 1,
            transform: `translate(-50%, ${isActive ? "-60%" : "-50%"})`,
          }}
        >
          {icon}
        </div>

        <h2
          className="text-center text-2xl md:text-3xl font-bold relative z-10 mt-4 transition-all duration-300"
          style={{
            opacity: isActive ? 1 : 0,
            color: "white",
            transform: `translateY(${isActive ? "0px" : "20px"})`,
          }}
        >
          {title}
        </h2>

        <p
          className="text-sm text-center relative z-10 mt-4 transition-all duration-300"
          style={{
            opacity: isActive ? 1 : 0,
            color: "#E4ECFF",
            transform: `translateY(${isActive ? "0px" : "20px"})`,
          }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <button className="relative inline-flex overflow-hidden rounded-full p-px">
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
        bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
      />
      <span
        className="inline-flex h-full w-full cursor-pointer items-center
        justify-center rounded-full bg-[#020202] px-5 py-2 text-white
        backdrop-blur-3xl font-bold text-xl md:text-2xl"
      >
        {order}
      </span>
    </button>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
