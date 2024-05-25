import logo from "@/assets/logo.svg";
import { BottomBar } from "@/components/BottomBar";
import { ContentCard } from "@/components/ContentCard";
import { TopBar } from "@/components/TopBar";
import { TrackPlay } from "@/components/TrackPlay/TrackPlay";
import { TrackTile } from "@/components/TrackPlay/TrackTile";
import { UserButton } from "@/components/UserButton";
import { WeeklyPlaylistCard } from "@/components/WeeklyPlaylistCard";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { usePlayControlTile } from "@/contexts/play-control-tile";
import { Play, Star, VinylRecord } from "@phosphor-icons/react";

export const HomePage = () => {
  const control = usePlayControlTile();

  return (
    <>
      <TopBar>
        <img src={logo} alt="logo" className="h-10 ml-4 mr-4" />
        <div className="grow"></div>
        <UserButton />
      </TopBar>
      <div className="mx-4 mt-4">
        <p className="text-lg">Xin chào, Quân</p>
        <p className="text-xl font-bold">Ngày mới, nhạc mới!</p>
        <div className="mt-4">
          <WeeklyPlaylistCard />
        </div>
        <div className="flex items-center mt-8">
          <Star className="text-xl mr-2" />
          <p className="text-xl font-semibold">Đã phát gần đây</p>
        </div>
      </div>
      <ScrollArea>
        <div className="flex gap-3 my-6 mx-4">
          <ContentCard size="md" actionIcon={<Play />} />
          <ContentCard size="md" actionIcon={<Play />} />
          <ContentCard size="md" actionIcon={<Play />} />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="flex items-center mt-8 mx-4">
        <VinylRecord className="text-xl mr-2" />
        <p className="text-xl font-semibold">Đĩa nhạc thịnh hành</p>
      </div>
      <ScrollArea>
        <div className="flex gap-3 my-6 mx-4">
          <ContentCard size="md" actionIcon={<VinylRecord />} />
          <ContentCard size="md" actionIcon={<VinylRecord />} />
          <ContentCard size="md" actionIcon={<VinylRecord />} />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <Drawer shouldScaleBackground>
        <DrawerTrigger className="text-start" hidden={control.isHidden}>
          <TrackTile className="bg-secondary fixed bottom-[4.2rem] left-0 right-0" />
        </DrawerTrigger>
        <DrawerContent showDragHandle={false} className="h-screen">
          <TrackPlay />
        </DrawerContent>
      </Drawer>
      <BottomBar />
    </>
  );
};
