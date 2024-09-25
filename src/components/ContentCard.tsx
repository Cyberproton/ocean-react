import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/utils";
import { IconContext } from "@phosphor-icons/react";
import { MouseEventHandler, forwardRef } from "react";
import { DivButton } from "./ui/button";

export interface ContentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "square" | "circle" | "circular-image";
  size?: "xl" | "lg" | "md" | "sm";
  actionIcon?: React.ReactNode;
  actionOnClick?: MouseEventHandler<HTMLElement>;
  title?: string;
  subtitle?: string;
  imageUrl?: string;
}

const createClassNames = ({ variant, size }: ContentCardProps) => {
  const card = variant == "circle" ? "" : "border";
  const imageShape =
    variant == "circle" || variant == "circular-image"
      ? "rounded-full"
      : "rounded-t-lg";
  const isSmall = size == null || size == "sm";
  const width =
    size == "xl"
      ? "w-full"
      : size == "lg"
      ? "w-56"
      : size == "md"
      ? "w-40"
      : "w-32";
  const imageHeight = size == "lg" ? "h-40" : size == "md" ? "h-40" : "h-32";
  const contentPadding = isSmall ? "p-2" : "p-4";
  const contentStyle = variant == "circle" ? "flex flex-col items-center" : "";
  const buttonSize = isSmall
    ? "h-12 w-12 bottom-2 left-2 p-3"
    : "h-14 w-14 bottom-4 left-4 ";
  const buttonIconSize = isSmall ? "text-sm" : "text-base";

  return {
    card,
    imageShape,
    isSmall,
    width,
    imageHeight,
    contentPadding,
    contentStyle,
    buttonSize,
    buttonIconSize,
  };
};

export const ContentCard = forwardRef<HTMLDivElement, ContentCardProps>(
  (
    {
      variant,
      size,
      actionIcon,
      actionOnClick,
      className,
      title,
      subtitle,
      imageUrl,
      ...props
    },
    ref
  ) => {
    const {
      card,
      imageShape,
      isSmall,
      width,
      imageHeight,
      contentPadding,
      contentStyle,
      buttonSize,
      buttonIconSize,
    } = createClassNames({
      variant,
      size,
    });

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg bg-card text-card-foreground shadow-sm",
          card,
          width,
          className
        )}
        {...props}
      >
        <div className="relative">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="cover"
              className={cn("object-cover", width, imageHeight, imageShape)}
            />
          ) : (
            <div
              className={cn(width, imageHeight, imageShape, "bg-secondary")}
            />
          )}
          {actionIcon && (
            <IconContext.Provider
              value={{
                className: buttonIconSize,
              }}
            >
              <DivButton
                variant="outline"
                className={`${buttonSize} absolute`}
                onClick={actionOnClick}
              >
                {actionIcon}
              </DivButton>
            </IconContext.Provider>
          )}
        </div>
        <div className={cn(contentStyle, contentPadding)}>
          <p
            className={cn(
              size == "xl"
                ? "font-bold text-2xl text-primary"
                : size && size != "sm"
                ? "font-bold"
                : "font-bold text-sm",
              "line-clamp-1"
            )}
          >
            {title}
          </p>
          {subtitle && (
            <p
              className={cn(
                size && size != "sm" ? "text-sm" : "text-xs",
                "line-clamp-2",
                "mt-1"
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    );
  }
);

export const ContentCardLoading = (props: ContentCardProps) => {
  const { card, imageShape, width, imageHeight, contentPadding, contentStyle } =
    createClassNames(props);

  return (
    <div
      className={cn(
        "rounded-lg bg-card text-card-foreground shadow-sm",
        card,
        width
      )}
    >
      <Skeleton className={cn(width, imageHeight, imageShape)}></Skeleton>
      <div className={cn(contentStyle, contentPadding)}>
        <Skeleton className="h-4 w-1/2 mb-2"></Skeleton>
        <Skeleton className="h-3 w-1/3"></Skeleton>
      </div>
    </div>
  );
};
