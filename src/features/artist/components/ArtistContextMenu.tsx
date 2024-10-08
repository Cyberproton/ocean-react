import { QuickTile } from "@/components/Tile";
import {
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { ArtistTile } from "@/features/artist/components/ArtistTile";
import { Artist } from "@/features/artist/models/artist";
import { UserMinus, UserPlus } from "@phosphor-icons/react";

export const ArtistContextMenuDialogContent = ({
  artist,
}: {
  artist: Artist;
}) => {
  return (
    <DrawerContent>
      <DrawerTitle hidden>
        Artist {artist.name ?? artist.username} context menu
      </DrawerTitle>
      <DrawerDescription hidden>
        A context menu for artist {artist.name ?? artist.username}
      </DrawerDescription>
      <ArtistContextMenu artist={artist} />
    </DrawerContent>
  );
};

export const ArtistContextMenu = ({ artist }: { artist: Artist }) => {
  return (
    <>
      <ArtistTile artist={artist} disableAction className="mt-4" />
      <Separator className="my-1" />
      {artist.isFollowedByCurrentUser ? (
        <QuickTile
          tileProps={{
            title: "Hủy theo dõi",
            leadingIcon: <UserMinus />,
          }}
        />
      ) : (
        <QuickTile
          tileProps={{
            title: "Theo dõi",
            leadingIcon: <UserPlus />,
          }}
        />
      )}
    </>
  );
};
