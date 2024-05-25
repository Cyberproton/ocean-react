import cover from "@/assets/track-cover-1.png";
import {
  Tile,
  TileContent,
  TileImage,
  TileSubtitle,
  TileTitle,
} from "@/components/Tile";
import { Button } from "@/components/ui/button";
import { DotsSix, DotsThreeVertical, Plus } from "@phosphor-icons/react";

export const NextPlayTab = () => {
  return (
    <>
      <p className="m-4">Danh sách phát hiện tại</p>
      <Tile>
        <TileImage src={cover} />
        <TileContent>
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
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.preventDefault();
            console.log("click");
          }}
        >
          <DotsSix />
        </Button>
      </Tile>
      <p className="m-4">Đề xuất</p>
      <Tile>
        <TileImage src={cover} />
        <TileContent>
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
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.preventDefault();
            console.log("click");
          }}
        >
          <Plus />
        </Button>
      </Tile>
    </>
  );
};
