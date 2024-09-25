import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useGetTopPlaylistsQuery } from "@/features/playlist/api/playlist";
import {
  PlaylistCard,
  PlaylistCardLoading,
} from "@/features/playlist/components/PlaylistCard";
import { Playlist } from "@phosphor-icons/react";

export const TrendingPlaylists = () => {
  const topPlaylistsQuery = useGetTopPlaylistsQuery({ limit: 4 });
  const playlists = topPlaylistsQuery.data?.items ?? [];

  return (
    <>
      <div className="flex items-center mt-8 mx-4">
        <Playlist className="text-xl mr-2" />
        <p className="text-xl font-semibold">Danh sách phát nổi bật</p>
      </div>
      <ScrollArea>
        <div className="flex gap-3 my-6 mx-4">
          {topPlaylistsQuery.isLoading ? (
            <>
              <PlaylistCardLoading />
              <PlaylistCardLoading />
            </>
          ) : (
            playlists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                playlist={playlist}
                className="h-full"
              />
            ))
          )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
};
