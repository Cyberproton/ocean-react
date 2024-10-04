import { Tile, TileContent, TileIcon, TileTitle } from "@/components/Tile";
import { Separator } from "@/components/ui/separator";
import { ArtistTile } from "@/features/artist/components/ArtistTile";
import { Artist } from "@/features/artist/models/artist";
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

export const ArtistContextMenu = ({ artist }: { artist: Artist }) => {
  return (
    <>
      <ArtistTile artist={artist} disableAction className="mt-4" />
      <Separator className="my-1" />
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
