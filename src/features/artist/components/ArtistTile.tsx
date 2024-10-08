import { ContentTile } from "@/components/ContentTile";
import { TileProps } from "@/components/Tile";
import { ArtistContextMenu } from "@/features/artist/components/ArtistContextMenu";
import { Artist } from "@/features/artist/models/artist";
import { findSpecifiedImageOrFirst } from "@/utils/image";

export const ArtistTile = ({
  artist,
  disableAction,
  ...props
}: { artist: Artist; disableAction?: boolean } & TileProps) => {
  if (artist == null) {
    return null;
  }

  return (
    <ContentTile
      title={artist.name ?? artist.username}
      subtitle="Nghệ sĩ"
      imageUrl={
        findSpecifiedImageOrFirst(artist.avatars, {
          width: 100,
          height: 100,
        })?.url
      }
      tileContextMenu={
        disableAction ? null : <ArtistContextMenu artist={artist} />
      }
      {...props}
    />
  );
};
