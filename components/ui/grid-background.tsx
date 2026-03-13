import { cn } from "@/lib/utils";

export function GridBackgroundDemo() {
  return (
    <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden bg-white dark:bg-black-100">
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[60px_60px]",
          "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_60%,black)] dark:bg-black-100"></div>
    </div>
  );
}
