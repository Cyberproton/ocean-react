import { QuickTile } from "@/components/Tile";
import { Separator } from "@/components/ui/separator";
import { PlaylistTile } from "@/features/playlist/components/PlaylistTile";
import { Playlist } from "@/features/playlist/models/playlist";
import {
  ListPlus,
  MinusCircle,
  PlusCircle,
  Queue,
  ShareFat,
  User,
} from "@phosphor-icons/react";

export const PlaylistContextMenu = ({ playlist }: { playlist: Playlist }) => {
  return (
    <>
      <PlaylistTile playlist={playlist} disableAction />
      <Separator className="my-1" />
      <QuickTile
        tileProps={{
          compact: true,
          leadingIcon: <Queue />,
          title: "Phát tiếp theo",
        }}
        className="gap-0"
      />
      {playlist.isSavedByCurrentUser ? (
        <QuickTile
          tileProps={{
            compact: true,
            leadingIcon: <MinusCircle />,
            title: "Xóa khỏi thư viện",
          }}
          className="gap-0"
        />
      ) : (
        <QuickTile
          tileProps={{
            compact: true,
            leadingIcon: <PlusCircle />,
            title: "Lưu vào thư viện",
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
          title: "Thông tin người tạo",
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
