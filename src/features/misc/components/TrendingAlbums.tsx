import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useGetTopAlbumsQuery } from "@/features/album/api/album";
import {
  AlbumCard,
  AlbumCardLoading,
} from "@/features/album/components/AlbumCard";
import { VinylRecord } from "@phosphor-icons/react";

export const TrendingAlbums = () => {
  const topAlbumQuery = useGetTopAlbumsQuery({ limit: 4 });
  const albums = topAlbumQuery.data?.items ?? [];

  return (
    <>
      <div className="flex items-center mt-8 mx-4">
        <VinylRecord className="text-xl mr-2" />
        <p className="text-xl font-semibold">Đĩa nhạc thịnh hành</p>
      </div>
      <ScrollArea>
        <div className="flex gap-3 my-6 mx-4">
          {topAlbumQuery.isLoading ? (
            <>
              <AlbumCardLoading />
              <AlbumCardLoading />
            </>
          ) : (
            albums.map((album) => (
              <AlbumCard key={album.id} album={album} className="h-full" />
            ))
          )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
};
