import {
  Tile,
  TileContent,
  TileIcon,
  TileImage,
  TileSubtitle,
  TileTitle,
} from "@/components/Tile";
import { TopBar, TopBarContent } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import {
  Check,
  ClockCounterClockwise,
  DotsThreeVertical,
  Heart,
  MagnifyingGlass,
  SortAscending,
} from "@phosphor-icons/react";
import { useState } from "react";

import cover from "@/assets/track-cover-1.png";
import { RequireAuth } from "@/components/RequireAuth";
import { UserButton } from "@/components/UserButton";

const options = ["Danh sách phát", "Nghệ sĩ", "Đĩa nhạc"];

export const LibraryPage = () => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <>
      <TopBar>
        <TopBarContent className="ml-4">
          <p className="text-xl">Thư viện</p>
        </TopBarContent>
        <Button variant="ghost" size="icon">
          <MagnifyingGlass />
        </Button>
        <UserButton />
      </TopBar>
      <RequireAuth>
        <div className="flex gap-2 p-4">
          {options.map((option) => (
            <Button
              key={option}
              variant={selected.includes(option) ? "default" : "outline"}
              size="sm"
              onClick={() => {
                if (selected.includes(option)) {
                  setSelected(selected.filter((item) => item !== option));
                } else {
                  setSelected([...selected, option]);
                }
              }}
              className="items-center gap-2"
            >
              {selected.includes(option) && <Check weight="bold" />}
              {option}
            </Button>
          ))}
        </div>
        <Button variant="text" className="gap-2 items-center my-2">
          <SortAscending className="text-xl" />
          Hoạt động gần đây
        </Button>
        <Tile>
          <TileIcon className="bg-slate-500">
            <ClockCounterClockwise className="text-2xl text-white" />
          </TileIcon>
          <TileContent>
            <TileTitle>Lịch sử nghe</TileTitle>
            <TileSubtitle>Được tạo tự động</TileSubtitle>
          </TileContent>
        </Tile>
        <Tile>
          <TileIcon className="bg-primary">
            <Heart className="text-2xl text-white" weight="fill" />
          </TileIcon>
          <TileContent>
            <TileTitle>Danh sách yêu thích</TileTitle>
            <TileSubtitle>Những bài hát bạn đã thích</TileSubtitle>
          </TileContent>
        </Tile>
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
        </Tile>
      </RequireAuth>
    </>
  );
};
