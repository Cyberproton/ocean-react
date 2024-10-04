import { cn } from "@/utils";
import React from "react";

export interface QuickTileProps extends React.HTMLAttributes<HTMLDivElement> {
  tileProps: {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    overline?: React.ReactNode;
    leading?: React.ReactNode;
    leadingIcon?: React.ReactNode;
    trailing?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    compact?: boolean;
  };
}

export const QuickTile = ({ tileProps, ...props }: QuickTileProps) => {
  const {
    title,
    subtitle,
    overline,
    leading,
    leadingIcon,
    trailing,
    trailingIcon,
    compact,
  } = tileProps;

  return (
    <Tile compact={compact} {...props}>
      {leading}
      {leadingIcon ? <TileIcon>{leadingIcon}</TileIcon> : null}
      <TileContent>
        {overline ? <TileOverline>{overline}</TileOverline> : null}
        {title ? <TileTitle>{title}</TileTitle> : null}
        {subtitle ? <TileSubtitle>{subtitle}</TileSubtitle> : null}
      </TileContent>
      {trailingIcon ? <TileIcon>{trailingIcon}</TileIcon> : null}
      {trailing}
    </Tile>
  );
};

export interface TileProps extends React.HTMLAttributes<HTMLDivElement> {
  compact?: boolean;
}

export const Tile = React.forwardRef<HTMLDivElement, TileProps>(
  ({ className, compact, ...props }, ref) => {
    const padding = compact ? "px-2 py-1" : "px-4 py-2";
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-4 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors",
          padding,
          className
        )}
        {...props}
      />
    );
  }
);

export const TileImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, src, ...props }, ref) => {
  if (!src) {
    return <div className="w-14 h-14 object-cover rounded-lg bg-secondary" />;
  }

  return (
    <img
      ref={ref}
      className={cn("w-14 h-14 object-cover rounded-lg", className)}
      src={src}
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

export const TileIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex shrink-0 items-center justify-center w-14 h-14 text-2xl rounded-lg",
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
  return <div ref={ref} className={cn("flex-1", className)} {...props} />;
});
