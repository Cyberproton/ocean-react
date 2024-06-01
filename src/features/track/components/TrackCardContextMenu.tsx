import { Tile, TileContent, TileIcon, TileTitle } from "@/components/Tile";
import { TrackTile } from "@/features/track/components/TrackTile";
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

export const TrackCardContextMenu = () => {
  return (
    <>
      <TrackTile disableAction className="mt-4" />
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
