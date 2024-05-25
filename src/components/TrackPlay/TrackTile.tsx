import {
  Tile,
  TileContent,
  TileImage,
  TileSubtitle,
  TileTitle,
} from "@/components/Tile";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlayCircle } from "@phosphor-icons/react";
import { forwardRef } from "react";

export const TrackTile = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { onClick } = props;

  return (
    <div ref={ref} {...props}>
      <Tile onClick={onClick}>
        <TileImage src="https://i1.sndcdn.com/artworks-mn62TV9eiyEZ7fvJ-WQ8gPA-t500x500.jpg" />
        <TileContent>
          <TileTitle>Sunshine</TileTitle>
          <TileSubtitle>Spiky Candy</TileSubtitle>
        </TileContent>
        <Button variant="ghost" size="icon-2xl">
          <PlayCircle weight="fill" />
        </Button>
      </Tile>
      <Separator className="bg-primary h-0.5" />
    </div>
  );
});
