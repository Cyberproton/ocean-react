import { ContentTile } from "@/components/ContentTile";
import { TileProps } from "@/components/Tile";
import { ArtistContextMenuDialogContent } from "@/features/artist/components/ArtistContextMenu";
import { Profile } from "@/features/profile/models/profile";
import { findSpecifiedImageOrFirst } from "@/utils/image";

export const ProfileTile = ({
  profile,
  ...props
}: { profile: Profile; disableAction?: boolean } & TileProps) => {
  if (profile == null) {
    return null;
  }

  return (
    <ContentTile
      title={profile.name ?? profile.username}
      subtitle="Nguời dùng"
      imageUrl={
        findSpecifiedImageOrFirst(profile.avatars, {
          width: 100,
          height: 100,
        })?.url
      }
      tileContextMenu={<ArtistContextMenuDialogContent artist={profile} />}
      {...props}
    />
  );
};
