import { QuickTile } from "@/components/Tile";
import { Separator } from "@/components/ui/separator";
import { AlbumTile } from "@/features/album/components/AlbumTile";
import { Album } from "@/features/album/models/album";
import {
  ListPlus,
  MinusCircle,
  PlusCircle,
  Queue,
  ShareFat,
  User,
} from "@phosphor-icons/react";

export const AlbumContextMenu = ({ album }: { album: Album }) => {
  return (
    <>
      <AlbumTile album={album} disableAction />
      <Separator className="my-1" />
      <QuickTile
        tileProps={{
          compact: true,
          leadingIcon: <Queue />,
          title: "Phát tiếp theo",
        }}
        className="gap-0"
      />
      {album.isSavedByCurrentUser ? (
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
