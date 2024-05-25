import { BottomBar } from "@/components/BottomBar";
import {
  Tile,
  TileContent,
  TileImage,
  TileOverline,
  TileSubtitle,
  TileTitle,
} from "@/components/Tile";
import { TopBar, TopBarContent } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import {
  DotsThreeVertical,
  MagnifyingGlass,
  Play,
  TrendUp,
} from "@phosphor-icons/react";

import cover from "@/assets/track-cover-1.png";
import { ImageAction } from "@/components/ImageAction";
import { ScrollArea } from "@/components/ui/scroll-area";

export const RankingsPage = () => {
  return (
    <>
      <TopBar>
        <TopBarContent className="ml-4">
          <p className="text-xl">Bảng xếp hạng</p>
        </TopBarContent>
        <Button variant="ghost" size="icon">
          <MagnifyingGlass />
        </Button>
        <div className="mr-2"></div>
      </TopBar>
      <ScrollArea>
        <div className="flex gap-2 items-center justify-center my-4 text-2xl text-center">
          <TrendUp />
          <p>Những bài hát xu hướng</p>
        </div>
        <div className="border rounded-lg m-2 mt-4 shadow-md">
          <ImageAction src={cover} className="h-40 rounded-t-lg">
            <Button variant="outline" className="size-14 text-2xl">
              <Play />
            </Button>
          </ImageAction>
          <Tile>
            <p className="text-xl text-primary">1</p>
            <TileImage
              src="https://avatars.githubusercontent.com/u/66234343?v=4"
              alt="cover"
              className="rounded-full"
            />
            <TileContent>
              <p className="text-xl font-medium">Say So</p>
              <TileSubtitle>Doja Cat - 1.3T lượt nghe</TileSubtitle>
            </TileContent>
            <Button variant="ghost" size="icon">
              <DotsThreeVertical weight="bold" />
            </Button>
          </Tile>
        </div>
        <Tile className="m-2">
          <p className="text-xl text-cyan-500">2</p>
          <img src={cover} className="w-14 h-14 object-cover rounded-lg" />
          <TileContent>
            <TileOverline>Đĩa nhạc</TileOverline>
            <TileTitle>Waltz for Debby</TileTitle>
            <TileSubtitle>Bill Evans</TileSubtitle>
          </TileContent>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.preventDefault();
              console.log("click");
            }}
          >
            <DotsThreeVertical weight="bold" />
          </Button>
        </Tile>
        <Tile className="m-2">
          <p className="text-xl text-orange-500">3</p>
          <img src={cover} className="w-14 h-14 object-cover rounded-lg" />
          <TileContent>
            <TileOverline>Đĩa nhạc</TileOverline>
            <TileTitle>Waltz for Debby</TileTitle>
            <TileSubtitle>Bill Evans</TileSubtitle>
          </TileContent>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.preventDefault();
              console.log("click");
            }}
          >
            <DotsThreeVertical weight="bold" />
          </Button>
        </Tile>
        <Tile className="m-2">
          <p className="text-xl">4</p>
          <img src={cover} className="w-14 h-14 object-cover rounded-lg" />
          <TileContent>
            <TileOverline>Đĩa nhạc</TileOverline>
            <TileTitle>Waltz for Debby</TileTitle>
            <TileSubtitle>Bill Evans</TileSubtitle>
          </TileContent>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.preventDefault();
              console.log("click");
            }}
          >
            <DotsThreeVertical weight="bold" />
          </Button>
        </Tile>
        <Tile className="m-2">
          <p className="text-xl">5</p>
          <img src={cover} className="w-14 h-14 object-cover rounded-lg" />
          <TileContent>
            <TileOverline>Đĩa nhạc</TileOverline>
            <TileTitle>Waltz for Debby</TileTitle>
            <TileSubtitle>Bill Evans</TileSubtitle>
          </TileContent>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.preventDefault();
              console.log("click");
            }}
          >
            <DotsThreeVertical weight="bold" />
          </Button>
        </Tile>
      </ScrollArea>
      <BottomBar />
    </>
  );
};
