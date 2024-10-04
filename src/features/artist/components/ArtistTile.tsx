import cover from "@/assets/track-cover-1.png";
import {
  Tile,
  TileContent,
  TileProps,
  TileSubtitle,
  TileTitle,
} from "@/components/Tile";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { ArtistContextMenu } from "@/features/artist/components/ArtistContextMenu";
import { Artist } from "@/features/artist/models/artist";
import { DotsThreeVertical } from "@phosphor-icons/react";
import { useState } from "react";
import { LongPressEventType, useLongPress } from "use-long-press";

export const ArtistTile = ({
  artist,
  disableAction,
  ...props
}: { artist: Artist; disableAction?: boolean } & TileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const bindLongPress = useLongPress(
    () => {
      setIsOpen(true);
    },
    {
      detect: LongPressEventType.Mouse,
    }
  );

  if (artist == null) {
    return null;
  }

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
          <TileTitle className="line-clamp-1">
            {artist.name ?? artist.username}
          </TileTitle>
          <TileSubtitle className="line-clamp-2">Nghệ sĩ</TileSubtitle>
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
          <ArtistContextMenu artist={artist} />
        </DrawerContent>
      </Drawer>
    </>
  );
};
