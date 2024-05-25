import { cn } from "@/utils";
import React from "react";

export interface TileProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  overline?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  className?: React.ReactNode;
}

export const TileWithInlineProps = (props: TileProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-4 px-4 py-2 hover:bg-accent hover:text-accent-foreground",
        props.className
      )}
    >
      {props.leading}
      <div className="flex-1">
        <div className="text-xs text-muted-foreground">{props.overline}</div>
        <div className="font-medium">{props.title}</div>
        <div className="text-sm text-muted-foreground">{props.subtitle}</div>
      </div>
      {props.trailing}
    </div>
  );
};

export const Tile = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors",
        className
      )}
      {...props}
    />
  );
});

export const TileImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => {
  return (
    <img
      ref={ref}
      className={cn("w-14 h-14 object-cover rounded-lg", className)}
      {...props}
    />
  );
});

export const TileTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("font-medium", className)} {...props} />;
});

export const TileSubtitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("text-sm", className)} {...props} />;
});

export const TileOverline = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("text-xs", className)} {...props} />;
});

export const TileAdornment = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex shrink-0 items-center justify-center w-14 h-14 rounded-lg",
        className
      )}
      {...props}
    />
  );
});

export const TileContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("flex-grow", className)} {...props} />;
});
