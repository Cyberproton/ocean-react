import cover from "@/assets/track-cover-1.png";
import {
  Tile,
  TileContent,
  TileOverline,
  TileProps,
  TileSubtitle,
  TileTitle,
} from "@/components/Tile";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { TrackContextMenu } from "@/features/track/components/TrackCardContextMenu";
import { DotsThreeVertical } from "@phosphor-icons/react";
import { useState } from "react";
import { LongPressEventType, useLongPress } from "use-long-press";

export const AlbumTile = ({
  disableAction,
  ...props
}: { disableAction?: boolean } & TileProps) => {
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
    <>
      <Tile
        {...props}
        onContextMenu={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
        {...bindLongPress()}
      >
        <img src={cover} className="w-14 h-14 object-cover rounded-lg" />
        <TileContent>
          <TileOverline>Đĩa nhạc</TileOverline>
          <TileTitle>Waltz for Debby</TileTitle>
          <TileSubtitle>Bill Evans</TileSubtitle>
        </TileContent>
        {disableAction ? null : (
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
            }}
          >
            <DotsThreeVertical weight="bold" />
          </Button>
        )}
      </Tile>
      <Drawer
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
        }}
      >
        <DrawerContent>
          <TrackContextMenu />
        </DrawerContent>
      </Drawer>
    </>
  );
};
