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
import { PlaylistContextMenu } from "@/features/playlist/components/PlaylistContextMenu";
import { Playlist } from "@/features/playlist/models/playlist";
import { findSpecifiedImageOrFirst } from "@/utils/image";
import { dotSeparator } from "@/utils/string";
import { DotsThreeVertical } from "@phosphor-icons/react";
import { useState } from "react";
import { LongPressEventType, useLongPress } from "use-long-press";

export const PlaylistTile = ({
  playlist,
  disableAction,
  ...props
}: { playlist: Playlist; disableAction?: boolean } & TileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const bindLongPress = useLongPress(
    () => {
      setIsOpen(true);
    },
    {
      detect: LongPressEventType.Mouse,
    }
  );

  if (playlist == null) {
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
            findSpecifiedImageOrFirst(playlist.covers, {
              width: 300,
              height: 300,
            })?.url
          }
        />
        <TileContent>
          <TileTitle className="line-clamp-1">{playlist.name}</TileTitle>
          <TileSubtitle className="line-clamp-2">
            Danh sách phát{" " + dotSeparator + " "}
            {playlist.owner?.name ?? playlist.owner?.username}
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
          <PlaylistContextMenu playlist={playlist} />
        </DrawerContent>
      </Drawer>
    </>
  );
};
