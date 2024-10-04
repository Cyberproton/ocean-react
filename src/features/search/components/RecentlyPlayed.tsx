import { ContentCardLoading } from "@/components/ContentCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { AlbumCard } from "@/features/album/components/AlbumCard";
import { ArtistCard } from "@/features/artist/components/ArtistCard";
import { useGetHistoriesQuery } from "@/features/histories/api/histories";
import { HistoryType } from "@/features/histories/models/history";
import { FindByLyricsCard } from "@/features/search/components/FindByLyricsCard";
import { FindBySoundCard } from "@/features/search/components/FindBySoundCard";
import { TrackCard } from "@/features/track/components/TrackCard";

export const RecentlyPlayed = () => {
  const trackQuery = useGetHistoriesQuery({
    limit: 4,
    types: [HistoryType.TRACK],
  });
  const albumQuery = useGetHistoriesQuery({
    limit: 4,
    types: [HistoryType.ALBUM],
  });
  const artistQuery = useGetHistoriesQuery({
    limit: 4,
    types: [HistoryType.ARTIST],
  });

  const tracks = trackQuery.data?.items.map((i) => i.track) ?? [];
  const albums = albumQuery.data?.items.map((i) => i.album) ?? [];
  const artists = artistQuery.data?.items.map((i) => i.artist) ?? [];

  return (
    <>
      <div className="flex items-stretch mx-4 gap-2">
        <FindByLyricsCard />
        <FindBySoundCard />
      </div>
      <h4 className="font-medium mt-6 mb-4 mx-4">Các bài nhạc gần đây</h4>
      <ScrollArea>
        <div className="flex gap-3 mb-4 mx-4">
          {trackQuery.isLoading ? (
            <>
              <ContentCardLoading size="sm" />
              <ContentCardLoading size="sm" />
            </>
          ) : tracks.length > 0 ? (
            tracks.map((track) => (
              <TrackCard key={track.id} track={track} size="sm" />
            ))
          ) : (
            <div className="text-sm">
              Không có bài nhạc nào được phát gần đây
            </div>
          )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <h4 className="font-medium my-4 mx-4">Các đĩa nhạc gần đây</h4>
      <ScrollArea>
        <div className="flex gap-3 mb-4 mx-4">
          {albumQuery.isLoading ? (
            <>
              <ContentCardLoading size="sm" />
              <ContentCardLoading size="sm" />
            </>
          ) : (
            albums.map((a) => <AlbumCard key={a.id} album={a} size="sm" />)
          )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <h4 className="font-medium my-4 mx-4">Các nghệ sĩ gần đây</h4>
      <ScrollArea>
        <div className="flex gap-3 mb-4 mx-4">
          {artistQuery.isLoading ? (
            <>
              <ContentCardLoading size="sm" />
              <ContentCardLoading size="sm" />
            </>
          ) : (
            artists.map((a) => <ArtistCard key={a.id} artist={a} size="sm" />)
          )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
};
