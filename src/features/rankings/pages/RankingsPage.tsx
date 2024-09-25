import { TopBar, TopBarContent } from "@/components/TopBar";
import { TrendUp } from "@phosphor-icons/react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { TopTrackTile } from "@/features/rankings/components/TopTrackTile";
import { useGetTopTracksQuery } from "@/features/track/api/track";
import { TrackTile } from "@/features/track/components/TrackTile";
import { cn } from "@/utils";

export const RankingsPage = () => {
  const topTracksQuery = useGetTopTracksQuery({ limit: 20 });
  const tracks = topTracksQuery.data?.items ?? [];

  return (
    <>
      <TopBar>
        <TopBarContent className="ml-4">
          <p className="text-xl">Bảng xếp hạng</p>
        </TopBarContent>
        <div className="mr-2"></div>
      </TopBar>
      <ScrollArea>
        <div className="flex gap-2 items-center justify-center my-4 text-2xl text-center">
          <TrendUp />
          <p>Những bài hát xu hướng</p>
        </div>
        {tracks.length > 0 && (
          <TopTrackTile key={tracks[0].id} track={tracks[0]} />
        )}
        {tracks.length > 1 &&
          tracks.slice(1).map((track, index) => {
            const leadingTextColor =
              index === 0
                ? "text-emerald-500"
                : index === 1
                ? "text-orange-500"
                : "text-gray-500";
            const topNumber = index + 2;
            const alignLeftClass = topNumber > 9 ? "ml-0" : "ml-0";
            return (
              <TrackTile
                key={track.id}
                track={track}
                leading={
                  <p className={cn("text-xl", leadingTextColor)}>{topNumber}</p>
                }
                className={cn("w-full my-2", alignLeftClass)}
              />
            );
          })}
      </ScrollArea>
    </>
  );
};
