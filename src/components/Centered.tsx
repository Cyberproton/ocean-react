import { cn } from "@/utils";
import React from "react";

export const Centered = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center h-full w-full",
        className
      )}
      {...props}
    />
  );
});
