import * as React from "react";

import { cn } from "@/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startAdornment, endAdornment, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-teal-500 focus-within:ring-1 focus-within:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      >
        {startAdornment ? (
          <span className="flex align-middle text-slate-500 text-xl mr-2">
            {startAdornment}
          </span>
        ) : null}
        <input
          type={type}
          ref={ref}
          className="outline-none w-full"
          {...props}
        />
        {endAdornment ? (
          <span className="flex align-middle text-slate-500 text-xl">
            {endAdornment}
          </span>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
