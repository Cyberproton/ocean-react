import {
  Tile,
  TileContent,
  TileIcon,
  TileSubtitle,
  TileTitle,
} from "@/components/Tile";
import { TopBar, TopBarContent } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import {
  Check,
  ClockCounterClockwise,
  Heart,
  MagnifyingGlass,
  SortAscending,
} from "@phosphor-icons/react";
import { useState } from "react";

import { RequireAuth } from "@/components/RequireAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserButton } from "@/components/UserButton";
import { LibraryItemList } from "@/features/collection/components/LibraryItemList";
import {
  CollectionItemSort,
  CollectionItemType,
} from "@/features/collection/models/collection";
import { AppRoute } from "@/routes/routes";
import { useNavigate } from "react-router-dom";

type CollectionItemOption = {
  type: CollectionItemType;
  label: string;
};

const options: CollectionItemOption[] = [
  { type: CollectionItemType.SAVED_PLAYLIST, label: "Danh sách phát" },
  { type: CollectionItemType.FOLLOWED_ARTIST, label: "Nghệ sĩ" },
  { type: CollectionItemType.SAVED_ALBUM, label: "Đĩa nhạc" },
];

type CollectionItemSortOption = {
  sort: CollectionItemSort;
  label: string;
};

const sortOptions: CollectionItemSortOption[] = [
  { sort: CollectionItemSort.LAST_ACCESS_AT, label: "Hoạt động gần đây" },
  { sort: CollectionItemSort.CREATED_AT, label: "Ngày tạo" },
];

export const LibraryPage = () => {
  const [selectedTypes, setSelectedTypes] = useState<CollectionItemType[]>([]);
  const [selectedSorts, setSelectedSorts] = useState<CollectionItemSort>(
    CollectionItemSort.LAST_ACCESS_AT
  );
  const navigate = useNavigate();
  console.log(selectedTypes);
  console.log(selectedTypes.length > 1);

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
              key={option.type}
              variant={
                selectedTypes.includes(option.type) ? "default" : "outline"
              }
              size="sm"
              onClick={() => {
                if (selectedTypes.includes(option.type)) {
                  setSelectedTypes(
                    selectedTypes.filter((item) => item !== option.type)
                  );
                } else {
                  setSelectedTypes([...selectedTypes, option.type]);
                }
              }}
              className="items-center gap-2"
            >
              {selectedTypes.includes(option.type) && <Check weight="bold" />}
              {option.label}
            </Button>
          ))}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="text" className="gap-2 items-center my-2">
              <SortAscending className="text-xl" />
              {
                sortOptions.find((option) => option.sort === selectedSorts)
                  ?.label
              }
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Sắp xếp theo</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={selectedSorts}
              onValueChange={(v) => setSelectedSorts(v as CollectionItemSort)}
            >
              {sortOptions.map((option) => (
                <DropdownMenuRadioItem key={option.sort} value={option.sort}>
                  {option.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        {selectedTypes.includes(CollectionItemType.SAVED_PLAYLIST) ||
        selectedTypes.length < 1 ? (
          <>
            <Tile onClick={() => navigate(AppRoute.HISTORY)}>
              <TileIcon className="bg-slate-500">
                <ClockCounterClockwise className="text-2xl text-white" />
              </TileIcon>
              <TileContent>
                <TileTitle>Lịch sử nghe</TileTitle>
                <TileSubtitle>Được tạo tự động</TileSubtitle>
              </TileContent>
            </Tile>
            <Tile onClick={() => navigate(AppRoute.LIKED_TRACKS)}>
              <TileIcon className="bg-primary">
                <Heart className="text-2xl text-white" weight="fill" />
              </TileIcon>
              <TileContent>
                <TileTitle>Danh sách yêu thích</TileTitle>
                <TileSubtitle>Những bài hát bạn đã thích</TileSubtitle>
              </TileContent>
            </Tile>
          </>
        ) : null}
        <LibraryItemList types={selectedTypes} sort={selectedSorts} />
      </RequireAuth>
    </>
  );
};
