import { ContentCard } from "@/components/ContentCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { AlbumCard } from "@/features/album/components/AlbumCard";
import { ArtistCard } from "@/features/artist/components/ArtistCard";
import { FindByLyricsCard } from "@/features/search/components/FindByLyricsCard";
import { FindBySoundCard } from "@/features/search/components/FindBySoundCard";
import { TrackCard } from "@/features/track/components/TrackCard";

export const RecentlyPlayed = () => {
  return (
    <>
      <div className="flex items-stretch mx-4 gap-2">
        <FindByLyricsCard />
        <FindBySoundCard />
      </div>
      <h4 className="font-medium my-4 mx-4">Các bài nhạc gần đây</h4>
      <ScrollArea>
        <div className="flex gap-3 mb-4 mx-4">
          <TrackCard size="sm" />
          <TrackCard size="sm" />
          <TrackCard size="sm" />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <h4 className="font-medium my-4 mx-4">Các đĩa nhạc gần đây</h4>
      <ScrollArea>
        <div className="flex gap-3 mb-4 mx-4">
          <AlbumCard size="sm" />
          <AlbumCard size="sm" />
          <AlbumCard size="sm" />
          <AlbumCard size="sm" />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <h4 className="font-medium my-4 mx-4">Các nghệ sĩ gần đây</h4>
      <ScrollArea>
        <div className="flex gap-3 mb-4 mx-4">
          <ArtistCard size="sm" />
          <ContentCard variant="circle" />
          <ContentCard variant="circle" />
          <ContentCard variant="circle" />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
};
