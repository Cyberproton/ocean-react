import {
  Tile,
  TileContent,
  TileProps,
  TileSubtitle,
  TileTitle,
} from "@/components/Tile";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import { TrackContextMenuDialogContent } from "@/features/track/components/TrackCardContextMenu";
import { Track } from "@/features/track/models/track";
import { findSpecifiedImage } from "@/utils/image";
import { DotsThreeVertical } from "@phosphor-icons/react";
import { ReactNode, useState } from "react";
import { LongPressEventType, useLongPress } from "use-long-press";

export const TrackTile = ({
  disableAction,
  leading,
  track,
  ...props
}: {
  track: Track;
  disableAction?: boolean;
  leading?: ReactNode;
} & TileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const bindLongPress = useLongPress(
    () => {
      setIsOpen(true);
    },
    {
      detect: LongPressEventType.Mouse,
    }
  );

  // Workaround: For some reason, the track is undefined when the state is updated
  if (!track) {
    return null;
  }

  const cover = findSpecifiedImage(track?.album?.covers, {
    width: 300,
    height: 300,
  })?.url;

  return (
    <>
      <Tile
        onContextMenu={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
        {...bindLongPress()}
        {...props}
      >
        {leading}
        {cover != null ? (
          <img src={cover} className="w-14 h-14 object-cover rounded-lg" />
        ) : (
          <div className="w-14 h-14 object-cover rounded-lg bg-secondary" />
        )}
        <TileContent>
          <TileTitle className="line-clamp-1">{track.name}</TileTitle>
          <TileSubtitle className="line-clamp-1">
            {track.artists?.map((a) => a.name).join(", ") ?? "Unknown artist"}
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
        <TrackContextMenuDialogContent track={track} />
      </Drawer>
    </>
  );
};
