import { BackButton } from "@/components/BackButton";
import { Tile, TileContent, TileSubtitle, TileTitle } from "@/components/Tile";
import { TopBar } from "@/components/TopBar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { AppRoute } from "@/routes/routes";
import {
  DotsThreeVertical,
  PencilSimple,
  PlayCircle,
  PlusCircle,
} from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export const PlaylistPage = () => {
  const navigate = useNavigate();
  const isOwner = true;

  return (
    <>
      <TopBar>
        <BackButton />
        <p className="text-xl text-center w-full">Danh sách phát</p>
        <div className="w-16" />
      </TopBar>

      <ScrollArea>
        <div className="flex flex-col items-center">
          <img
            src="https://i1.sndcdn.com/artworks-mn62TV9eiyEZ7fvJ-WQ8gPA-t500x500.jpg"
            className="rounded-lg object-cover w-48 h-48 mx-auto mt-8 mb-4"
          />
          <p className="text-3xl my-1">Thong thả</p>
          <div className="flex items-center gap-2">
            <Avatar className="size-7">
              <AvatarImage src="https://avatars.githubusercontent.com/u/66234343?v=4" />
            </Avatar>
            <p>Không phải tôi</p>
          </div>
          <p className="my-2 text-sm">12 bài hát • 2 giờ • 2.3K lượt nghe</p>
          <p className="mt-3">Bắt đầu một ngày mới thong thả</p>
          <div className="flex items-center my-2">
            {isOwner ? (
              <Button
                variant="ghost"
                size="icon-xl"
                className="mx-1"
                onClick={() => navigate(AppRoute.PLAYLIST_EDIT)}
              >
                <PencilSimple />
              </Button>
            ) : (
              <Button variant="ghost" size="icon-xl" className="mx-1">
                <PlusCircle />
              </Button>
            )}
            <Button variant="ghost" className="w-24 h-24 text-7xl p-0 mx-1">
              <PlayCircle weight="fill" />
            </Button>
            <Button variant="ghost" size="icon-xl" className="mx-1">
              <DotsThreeVertical weight="bold" />
            </Button>
          </div>
          <Separator className="mt-2" />
          <Tile className="w-full">
            <img
              src="https://i1.sndcdn.com/artworks-mn62TV9eiyEZ7fvJ-WQ8gPA-t500x500.jpg"
              className="w-14 h-14 object-cover rounded-lg"
            />
            <TileContent>
              <TileTitle>Waltz for Debby</TileTitle>
              <TileSubtitle>Bill Evans</TileSubtitle>
            </TileContent>
            <Button variant="ghost" size="icon">
              <DotsThreeVertical weight="bold" />
            </Button>
          </Tile>
          <Tile className="w-full">
            <img
              src="https://i1.sndcdn.com/artworks-mn62TV9eiyEZ7fvJ-WQ8gPA-t500x500.jpg"
              className="w-14 h-14 object-cover rounded-lg"
            />
            <TileContent>
              <TileTitle>Waltz for Debby</TileTitle>
              <TileSubtitle>Bill Evans</TileSubtitle>
            </TileContent>
            <Button variant="ghost" size="icon">
              <DotsThreeVertical weight="bold" />
            </Button>
          </Tile>
          <Tile className="w-full">
            <img
              src="https://i1.sndcdn.com/artworks-mn62TV9eiyEZ7fvJ-WQ8gPA-t500x500.jpg"
              className="w-14 h-14 object-cover rounded-lg"
            />
            <TileContent>
              <TileTitle>Waltz for Debby</TileTitle>
              <TileSubtitle>Bill Evans</TileSubtitle>
            </TileContent>
            <Button variant="ghost" size="icon">
              <DotsThreeVertical weight="bold" />
            </Button>
          </Tile>
          <Tile className="w-full">
            <img
              src="https://i1.sndcdn.com/artworks-mn62TV9eiyEZ7fvJ-WQ8gPA-t500x500.jpg"
              className="w-14 h-14 object-cover rounded-lg"
            />
            <TileContent>
              <TileTitle>Waltz for Debby</TileTitle>
              <TileSubtitle>Bill Evans</TileSubtitle>
            </TileContent>
            <Button variant="ghost" size="icon">
              <DotsThreeVertical weight="bold" />
            </Button>
          </Tile>
        </div>
      </ScrollArea>
    </>
  );
};
