import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useGetHistoriesQuery } from "@/features/histories/api/histories";
import { HistoryType } from "@/features/histories/models/history";
import {
  TrackCard,
  TrackCardLoading,
} from "@/features/track/components/TrackCard";
import { Star } from "@phosphor-icons/react";

export const RecentlyPlayedTracks = () => {
  const tracksQuery = useGetHistoriesQuery({
    types: [HistoryType.TRACK],
    limit: 4,
  });

  const tracks = tracksQuery.data?.items.map((history) => history.track) ?? [];

  return (
    <>
      <div className="flex items-center mt-8 mx-4">
        <Star className="text-xl mr-2" />
        <p className="text-xl font-semibold">Đã phát gần đây</p>
      </div>
      <ScrollArea>
        <div className="flex gap-3 my-6 mx-4">
          {tracksQuery.isLoading ? (
            <>
              <TrackCardLoading />
              <TrackCardLoading />
            </>
          ) : (
            tracks.map((track) => <TrackCard key={track.id} track={track} />)
          )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
};
