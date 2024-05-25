import { usePlayControlTile } from "@/contexts/play-control-tile";
import { cn } from "@/utils";
import { IconContext } from "@phosphor-icons/react";
import { MouseEventHandler } from "react";
import cover from "../assets/track-cover-1.png";
import { TrackPlay } from "./TrackPlay/TrackPlay";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerPortal,
  DrawerTrigger,
} from "./ui/drawer";

export const ContentCard = (props: {
  variant?: "square" | "circle" | "circular-image";
  size?: "xl" | "lg" | "md" | "sm";
  actionIcon?: React.ReactNode;
  actionOnClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  const { variant, size, actionIcon, actionOnClick } = props;
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
  const buttonIconSize = isSmall ? "text-xl" : "text-base";

  const control = usePlayControlTile();

  return (
    <Drawer shouldScaleBackground>
      <DrawerTrigger
        className="text-start"
        onClick={() => {
          control.setIsHidden(false);
        }}
      >
        <div
          className={cn(
            "rounded-lg bg-card text-card-foreground shadow-sm",
            card,
            width
          )}
        >
          <div className="relative">
            <img
              src={cover}
              alt="cover"
              className={cn("object-cover", width, imageHeight, imageShape)}
            />
            {actionIcon && (
              <IconContext.Provider
                value={{
                  className: buttonIconSize,
                }}
              >
                <Button
                  variant="outline"
                  className={`${buttonSize} absolute`}
                  onClick={actionOnClick}
                >
                  {actionIcon}
                </Button>
              </IconContext.Provider>
            )}
          </div>
          <div className={cn(contentStyle, contentPadding)}>
            <p
              className={
                size == "xl"
                  ? "font-bold text-2xl text-primary"
                  : size && size != "sm"
                  ? "font-bold"
                  : "font-bold text-sm"
              }
            >
              Sakura Tree
            </p>
            <p className={size && size != "sm" ? "text-sm" : "text-xs"}>
              Vlad Gluschenko
            </p>
          </div>
        </div>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerContent className="h-screen" showDragHandle={false}>
          <TrackPlay />
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};
