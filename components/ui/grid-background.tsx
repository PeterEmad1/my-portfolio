import { cn } from "@/lib/utils";

// grid-background.tsx
export function GridBackgroundDemo() {
  return (
    <div className="pointer-events-none absolute inset-0 h-full w-full bg-white dark:bg-black-100">
      <div
        className={cn(
          "absolute inset-0 h-full w-full",
          // 1. Ensure the grid size is slightly more robust
          "bg-size-[50px_50px]", 
          // 2. Use 1.5px or 0.1rem to prevent the lines from rounding down to zero
          "bg-[linear-gradient(to_right,#e4e4e7_1.5px,transparent_1.5px),linear-gradient(to_bottom,#e4e4e7_1.5px,transparent_1.5px)]",
          "dark:bg-[linear-gradient(to_right,#262626_1.5px,transparent_1.5px),linear-gradient(to_bottom,#262626_1.5px,transparent_1.5px)]",
        )}
      />
      {/* 3. Check the mask property */}
      <div 
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black-100 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" 
      />
    </div>
  );
}
