import { TopBarWithProps } from "@/components/TopBar";
import { useGetMyLikedTracksQuery } from "@/features/track/api/track";
import { TrackTile } from "@/features/track/components/TrackTile";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export const LikedTrackPage = () => {
  const likedTrackQuery = useGetMyLikedTracksQuery(null);
  const likedTracks = likedTrackQuery.data?.items ?? [];

  return (
    <>
      <TopBarWithProps
        showBackButton
        leading={<p className="text-xl">Danh sách yêu thích</p>}
      />
      <ScrollArea className="mt-3">
        {likedTracks.map((track) => (
          <TrackTile key={track.id} track={track} />
        ))}
      </ScrollArea>
    </>
  );
};
