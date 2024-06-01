import cover from "@/assets/track-cover-1.png";
import {
  Tile,
  TileContent,
  TileOverline,
  TileProps,
  TileTitle,
} from "@/components/Tile";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { ArtistContextMenu } from "@/features/artist/components/ArtistContextMenu";
import { DotsThreeVertical } from "@phosphor-icons/react";
import { useState } from "react";
import { LongPressEventType, useLongPress } from "use-long-press";

export const ArtistTile = ({
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
        <img src={cover} className="w-14 h-14 object-cover rounded-full" />
        <TileContent>
          <TileOverline>Nghệ sĩ</TileOverline>
          <TileTitle>Bill Evans</TileTitle>
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
          <ArtistContextMenu />
        </DrawerContent>
      </Drawer>
    </>
  );
};
