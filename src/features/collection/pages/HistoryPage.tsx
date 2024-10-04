import { TopBarWithProps } from "@/components/TopBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlbumTile } from "@/features/album/components/AlbumTile";
import { useGetHistoriesQuery } from "@/features/histories/api/histories";
import { HistoryType } from "@/features/histories/models/history";
import { PlaylistTile } from "@/features/playlist/components/PlaylistTile";
import { TrackTile } from "@/features/track/components/TrackTile";

export const HistoryPage = () => {
  const historiesQuery = useGetHistoriesQuery({
    types: [HistoryType.ALBUM, HistoryType.PLAYLIST, HistoryType.TRACK],
  });
  const histories = historiesQuery.data?.items ?? [];

  return (
    <>
      <TopBarWithProps
        showBackButton
        leading={<p className="text-xl">Lịch sử nghe</p>}
      />
      <ScrollArea className="mt-3">
        {histories.map((history) => {
          if (history.track) {
            return <TrackTile key={history.id} track={history.track} />;
          }

          if (history.album) {
            return <AlbumTile key={history.id} album={history.album} />;
          }

          if (history.playlist) {
            return (
              <PlaylistTile key={history.id} playlist={history.playlist} />
            );
          }

          return null;
        })}
      </ScrollArea>
    </>
  );
};
