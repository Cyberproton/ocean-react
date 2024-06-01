import logo from "@/assets/logo.svg";
import { TopBar } from "@/components/TopBar";
import { UserButton } from "@/components/UserButton";
import { WeeklyPlaylistCard } from "@/components/WeeklyPlaylistCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { AlbumCard } from "@/features/album/components/AlbumCard";
import { PlaylistCard } from "@/features/playlist/components/PlaylistCard";
import { TrackCard } from "@/features/track/components/TrackCard";
import { Playlist, Star, VinylRecord } from "@phosphor-icons/react";

export const HomePage = () => {
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
          <TrackCard />
          <TrackCard />
          <TrackCard />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="flex items-center mt-8 mx-4">
        <VinylRecord className="text-xl mr-2" />
        <p className="text-xl font-semibold">Đĩa nhạc thịnh hành</p>
      </div>
      <ScrollArea>
        <div className="flex gap-3 my-6 mx-4">
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="flex items-center mt-8 mx-4">
        <Playlist className="text-xl mr-2" />
        <p className="text-xl font-semibold">Danh sách phát nổi bật</p>
      </div>
      <ScrollArea>
        <div className="flex gap-3 my-6 mx-4">
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
};
