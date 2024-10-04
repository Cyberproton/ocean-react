import {
  Tile,
  TileContent,
  TileImage,
  TileProps,
  TileSubtitle,
  TileTitle,
} from "@/components/Tile";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { AlbumContextMenu } from "@/features/album/components/AlbumContextMenu";
import { Album } from "@/features/album/models/album";
import { findSpecifiedImageOrFirst } from "@/utils/image";
import { dotSeparator } from "@/utils/string";
import { DotsThreeVertical } from "@phosphor-icons/react";
import { useState } from "react";
import { LongPressEventType, useLongPress } from "use-long-press";

export const AlbumTile = ({
  album,
  disableAction,
  ...props
}: { album: Album; disableAction?: boolean } & TileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const bindLongPress = useLongPress(
    () => {
      setIsOpen(true);
    },
    {
      detect: LongPressEventType.Mouse,
    }
  );

  if (album == null) {
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
        <TileImage
          src={
            findSpecifiedImageOrFirst(album.covers, { width: 300, height: 300 })
              ?.url
          }
        />
        <TileContent>
          <TileTitle className="line-clamp-1">{album.name}</TileTitle>
          <TileSubtitle className="line-clamp-2">
            Đĩa nhạc{" " + dotSeparator + " "}
            {album.artists
              .map((a) => a.name ?? a.username)
              .filter((a) => a)
              .join(", ")}
          </TileSubtitle>
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
          <AlbumContextMenu album={album} />
        </DrawerContent>
      </Drawer>
    </>
  );
};
