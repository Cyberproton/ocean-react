import { MediaCard } from "@/components/LargeCard";
import { HomeTopBar } from "@/components/TopBar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Play, Star, VinylRecord } from "@phosphor-icons/react";

import { BottomBar } from "@/components/BottomBar";
import { WeeklyPlaylistCard } from "@/components/WeeklyPlaylistCard";

export const HomePage = () => {
  return (
    <>
      <HomeTopBar />
      <div className="m-4">
        <p className="text-lg">Xin chào, Quân</p>
        <p className="text-xl font-bold">Ngày mới, nhạc mới!</p>
        <div className="mt-4">
          <WeeklyPlaylistCard />
        </div>
        <div className="my-8 ">
          <div className="flex items-center mb-6">
            <Star className="text-xl mr-2" />
            <p className="text-xl font-semibold">Đã phát gần đây</p>
          </div>
          <ScrollArea>
            <div className="flex gap-3 mb-4">
              <MediaCard icon={<Play />} />
              <MediaCard icon={<Play />} />
              <MediaCard icon={<Play />} />
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <div className="flex items-center mb-6">
          <VinylRecord className="text-xl mr-2" />
          <p className="text-xl font-semibold">Đĩa nhạc thịnh hành</p>
        </div>
        <ScrollArea>
          <div className="flex gap-3 mb-4">
            <MediaCard size="large" icon={<Play />} />
            <MediaCard size="large" icon={<Play />} />
            <MediaCard size="large" icon={<Play />} />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <BottomBar />
    </>
  );
};
