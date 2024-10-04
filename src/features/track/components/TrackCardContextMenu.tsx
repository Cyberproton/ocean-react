import { QuickTile } from "@/components/Tile";
import {
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { TrackTile } from "@/features/track/components/TrackTile";
import { Track } from "@/features/track/models/track";
import { Heart, ListPlus, Queue, ShareFat, User } from "@phosphor-icons/react";

export const TrackContextMenuDialogContent = ({ track }: { track: Track }) => {
  return (
    <DrawerContent>
      <DrawerTitle hidden>Track {track.name} context menu</DrawerTitle>
      <DrawerDescription hidden>
        A context menu for track {track.name}
      </DrawerDescription>
      <TrackContextMenu track={track} />
    </DrawerContent>
  );
};

export const TrackContextMenu = ({ track }: { track: Track }) => {
  return (
    <>
      <TrackTile disableAction className="mt-4" track={track} />
      <Separator className="my-1" />
      <QuickTile
        tileProps={{
          compact: true,
          leadingIcon: <Queue />,
          title: "Phát tiếp theo",
        }}
        className="gap-0"
      />
      {track.isLikedByCurrentUser ? (
        <QuickTile
          tileProps={{
            compact: true,
            leadingIcon: <Heart className="text-primary" weight="bold" />,
            title: "Xóa khỏi thư viện",
          }}
          className="gap-0"
        />
      ) : (
        <QuickTile
          tileProps={{
            compact: true,
            leadingIcon: <Heart />,
            title: "Thích bài hát",
          }}
          className="gap-0"
        />
      )}
      <QuickTile
        tileProps={{
          compact: true,
          leadingIcon: <ListPlus />,
          title: "Thêm vào danh sách phát",
        }}
        className="gap-0"
      />
      <QuickTile
        tileProps={{
          compact: true,
          leadingIcon: <User />,
          title: "Thông tin nghệ sĩ",
        }}
        className="gap-0"
      />
      <QuickTile
        tileProps={{
          compact: true,
          leadingIcon: <ShareFat />,
          title: "Chia sẻ",
        }}
        className="gap-0"
      />
    </>
  );
};
