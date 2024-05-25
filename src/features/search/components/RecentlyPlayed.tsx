import { ContentCard } from "@/components/ContentCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Play, VinylRecord } from "@phosphor-icons/react";

export const RecentlyPlayed = () => {
  return (
    <>
      <h4 className="font-medium my-4 mx-4">Các bài nhạc gần đây</h4>
      <ScrollArea>
        <div className="flex gap-3 mb-4 mx-4">
          <ContentCard actionIcon={<Play />} />
          <ContentCard actionIcon={<Play />} />
          <ContentCard actionIcon={<Play />} />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <h4 className="font-medium my-4 mx-4">Các đĩa nhạc gần đây</h4>
      <ScrollArea>
        <div className="flex gap-3 mb-4 mx-4">
          <ContentCard actionIcon={<VinylRecord />} />
          <ContentCard actionIcon={<VinylRecord />} />
          <ContentCard actionIcon={<VinylRecord />} />
          <ContentCard actionIcon={<VinylRecord />} />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <h4 className="font-medium my-4 mx-4">Các nghệ sĩ gần đây</h4>
      <ScrollArea>
        <div className="flex gap-3 mb-4 mx-4">
          <ContentCard variant="circle" />
          <ContentCard variant="circle" />
          <ContentCard variant="circle" />
          <ContentCard variant="circle" />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
};
