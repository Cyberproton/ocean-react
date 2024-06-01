import { Tile, TileContent, TileIcon, TileTitle } from "@/components/Tile";
import { ArtistTile } from "@/features/artist/components/ArtistTile";
import { ListPlus, UserPlus } from "@phosphor-icons/react";

const tileData = [
  {
    title: "Theo dõi",
    icon: <UserPlus />,
  },
  {
    title: "Thêm vào danh sách phát",
    icon: <ListPlus />,
  },
];

export const ArtistContextMenu = () => {
  return (
    <>
      <ArtistTile disableAction className="mt-4" />
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
