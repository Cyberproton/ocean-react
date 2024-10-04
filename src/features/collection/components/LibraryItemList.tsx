import { AlbumTile } from "@/features/album/components/AlbumTile";
import { ArtistTile } from "@/features/artist/components/ArtistTile";
import { useGetMyCollectionQuery } from "@/features/collection/api/collection";
import {
  CollectionItemSort,
  CollectionItemType,
} from "@/features/collection/models/collection";
import { PlaylistTile } from "@/features/playlist/components/PlaylistTile";

export const LibraryItemList = ({
  types,
  sort,
}: {
  types?: CollectionItemType[];
  sort?: CollectionItemSort;
}) => {
  const collectionQuery = useGetMyCollectionQuery({
    types: types || [
      CollectionItemType.SAVED_ALBUM,
      CollectionItemType.FOLLOWED_ARTIST,
      CollectionItemType.SAVED_PLAYLIST,
    ],
    sort,
  });
  const collectionItems = collectionQuery.data?.items ?? [];

  return (
    <>
      {collectionItems.map((item) => {
        switch (item.type) {
          case CollectionItemType.SAVED_ALBUM:
            return <AlbumTile key={item.id} album={item.album} />;
          case CollectionItemType.FOLLOWED_ARTIST:
            return <ArtistTile key={item.id} artist={item.artist} />;
          case CollectionItemType.SAVED_PLAYLIST:
            return <PlaylistTile key={item.id} playlist={item.playlist} />;
          default:
            return null;
        }
      })}
    </>
  );
};
