import cover from "@/assets/track-cover-1.png";
import { ImageAction } from "@/components/ImageAction";
import { Tile, TileContent, TileImage, TileSubtitle } from "@/components/Tile";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { TrackCardContextMenu } from "@/features/track/components/TrackCardContextMenu";
import { DotsThreeVertical, Play } from "@phosphor-icons/react";
import { useState } from "react";
import { LongPressEventType, useLongPress } from "use-long-press";

export const TopTrackTile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const bindLongPress = useLongPress(
    () => {
      setIsOpen(true);
    },
    {
      detect: LongPressEventType.Mouse,
    }
  );

  return (
    <div
      className="border rounded-lg m-2 mt-4 shadow-md"
      onContextMenu={(e) => {
        e.preventDefault();
        setIsOpen(true);
      }}
      {...bindLongPress()}
    >
      <ImageAction src={cover} className="h-40 rounded-t-lg">
        <Button variant="outline" className="size-14 text-2xl">
          <Play />
        </Button>
      </ImageAction>
      <Tile>
        <p className="text-xl text-primary">1</p>
        <TileImage
          src="https://avatars.githubusercontent.com/u/66234343?v=4"
          alt="cover"
          className="rounded-full"
        />
        <TileContent>
          <p className="text-xl font-medium">Say So</p>
          <TileSubtitle>Doja Cat - 1.3T lượt nghe</TileSubtitle>
        </TileContent>
        <Button variant="ghost" size="icon">
          <DotsThreeVertical weight="bold" />
        </Button>
      </Tile>
      <Drawer
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
        }}
      >
        <DrawerContent>
          <TrackCardContextMenu />
        </DrawerContent>
      </Drawer>
    </div>
  );
};
