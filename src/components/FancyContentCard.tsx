import { cn } from "@/utils";
import { PlayCircle } from "@phosphor-icons/react";
import cover from "../assets/track-cover-1.png";

export const FancyContentCard = (props: {
  variant?: "square" | "circle";
  size?: "large" | "medium" | "small";
  icon?: React.ReactNode;
}) => {
  const { variant, size, icon } = props;
  const card = variant == "circle" ? "" : "border";
  const cardImg = variant == "circle" ? "rounded-full" : "rounded-xl";
  const isSmall = size == null || size == "small";
  const width = size == "large" ? "w-56" : size == "medium" ? "w-40" : "w-32";
  const imageHeight =
    size == "large" ? "h-56" : size == "medium" ? "h-40" : "h-32";
  const contentPadding = isSmall ? "p-2" : "p-4";
  const contentStyle = variant == "circle" ? "flex flex-col items-center" : "";
  const buttonSize = isSmall
    ? "h-12 w-12 bottom-2 left-2 p-3"
    : "h-14 w-14 bottom-4 left-4 ";
  const buttonIconSize = isSmall ? "text-xl" : "text-base";

  return (
    <div
      className={cn(
        "relative rounded-xl bg-card text-card-foreground shadow-sm",
        card,
        width
      )}
    >
      <img
        src={cover}
        alt="cover"
        className={cn("object-cover", imageHeight, cardImg)}
      />
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 bg-slate-600 bg-opacity-40 backdrop-blur rounded-b-xl flex",
          contentStyle,
          contentPadding
        )}
      >
        <p
          className={
            size && size != "small"
              ? "font-bold"
              : "font-bold text-sm text-white flex-1"
          }
        >
          Sakura Tree
        </p>
        {/* <p
          className={size && size != "small" ? "text-sm" : "text-xs text-white"}
        >
          Vlad Gluschenko
        </p> */}
        <PlayCircle color="white" weight="fill" />
      </div>
    </div>
  );
};
