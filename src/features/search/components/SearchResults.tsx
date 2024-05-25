import {
  Tile,
  TileContent,
  TileOverline,
  TileSubtitle,
  TileTitle,
} from "@/components/Tile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import cover from "@/assets/track-cover-1.png";
import { Button } from "@/components/ui/button";
import { DotsThreeVertical } from "@phosphor-icons/react";

export const SearchResults = () => {
  return (
    <>
      <div className="mb-4">
        <p className="font-medium mx-4 mb-2">Bài hát</p>
        <Tile>
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
        <Tile>
          <img src={cover} className="w-14 h-14 object-cover rounded-lg" />
          <TileContent>
            <TileOverline>Đĩa nhạc</TileOverline>
            <TileTitle>Waltz for Debby</TileTitle>
            <TileSubtitle>Bill Evans</TileSubtitle>
          </TileContent>
        </Tile>
      </div>
      <div className="mb-4">
        <h4 className="font-medium mx-4 mb-2">Đĩa nhạc</h4>
        <Tile>
          <Avatar className="w-14 h-14">
            <AvatarImage src={cover} />
            <AvatarFallback>W</AvatarFallback>
          </Avatar>
          <TileContent>
            <TileOverline>Đĩa nhạc</TileOverline>
            <TileTitle>Waltz for Debby</TileTitle>
            <TileSubtitle>Bill Evans</TileSubtitle>
          </TileContent>
        </Tile>
      </div>
      <div className="mb-4">
        <h4 className="font-medium mx-4 mb-2">Nghệ sĩ</h4>
        <Tile>
          <Avatar className="w-14 h-14">
            <AvatarImage src={cover} />
            <AvatarFallback>W</AvatarFallback>
          </Avatar>
          <TileContent>
            <TileOverline>Đĩa nhạc</TileOverline>
            <TileTitle>Waltz for Debby</TileTitle>
            <TileSubtitle>Bill Evans</TileSubtitle>
          </TileContent>
        </Tile>
      </div>
    </>
  );
};
