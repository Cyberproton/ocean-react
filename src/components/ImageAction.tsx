import { cn } from "@/utils";
import React from "react";

export interface ImageActionProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  actionClassName?: string;
}

export const ImageAction = React.forwardRef<HTMLImageElement, ImageActionProps>(
  ({ className, actionClassName, children, src, ...props }, ref) => {
    return (
      <div className="relative">
        {src ? (
          <img
            ref={ref}
            className={cn("object-cover w-full", className)}
            {...props}
          />
        ) : (
          <div className={cn("object-cover w-full bg-secondary", className)} />
        )}
        {children && (
          <div className={cn("absolute left-4 bottom-4", actionClassName)}>
            {children}
          </div>
        )}
      </div>
    );
  }
);
