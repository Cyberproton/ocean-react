import {
  Tile,
  TileContent,
  TileOverline,
  TileSubtitle,
  TileTitle,
} from "@/components/Tile";
import { TopBar, TopBarContent } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import {
  DotsThreeVertical,
  MagnifyingGlass,
  TrendUp,
} from "@phosphor-icons/react";

import cover from "@/assets/track-cover-1.png";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TopTrackTile } from "@/features/rankings/components/TopTrackTile";
import { TrackTile } from "@/features/track/components/TrackTile";

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
        <TopTrackTile />
        <TrackTile
          leading={<p className="text-xl text-cyan-500">2</p>}
          className="m-2"
        />
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
    </>
  );
};
