import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useGetTopTracksQuery } from "@/features/track/api/track";
import {
  TrackCard,
  TrackCardLoading,
} from "@/features/track/components/TrackCard";
import { VinylRecord } from "@phosphor-icons/react";

export const TrendingTracks = () => {
  const topTracksQuery = useGetTopTracksQuery({ limit: 4 });
  const tracks = topTracksQuery.data?.items ?? [];

  return (
    <>
      <div className="flex items-center mt-8 mx-4">
        <VinylRecord className="text-xl mr-2" />
        <p className="text-xl font-semibold">Bài hát xu hướng</p>
      </div>
      <ScrollArea>
        <div className="flex gap-3 my-6 mx-4">
          {topTracksQuery.isLoading ? (
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
