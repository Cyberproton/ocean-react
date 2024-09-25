import { Tile, TileContent, TileIcon, TileTitle } from "@/components/Tile";
import {
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";
import { TrackTile } from "@/features/track/components/TrackTile";
import { Track } from "@/features/track/models/track";
import { ListPlus, PlusCircle, Queue, User } from "@phosphor-icons/react";

const tileData = [
  {
    title: "Phát tiếp theo",
    icon: <Queue />,
    onClick: () => {},
  },
  {
    title: "Lưu vào thư viện",
    icon: <PlusCircle />,
  },
  {
    title: "Thêm vào danh sách phát",
    icon: <ListPlus />,
  },
  {
    title: "Thông tin nghệ sĩ",
    icon: <User />,
  },
];

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
      {tileData.map((tile, index) => (
        <Tile compact className="gap-0" key={index}>
          <TileIcon>{tile.icon}</TileIcon>
          <TileContent>
            <TileTitle>{tile.title}</TileTitle>
          </TileContent>
        </Tile>
      ))}
    </>
  );
};
