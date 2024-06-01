import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ClockCounterClockwise,
  MagnifyingGlass,
  X,
} from "@phosphor-icons/react";
import { useState } from "react";
import { RecentlyPlayed } from "../components/RecentlyPlayed";
import { SearchResults } from "../components/SearchResults";

const items = ["Sakura Tree", "Nostalgia", "The Last Goodbye", "Blossom"];

export const SearchPage = () => {
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");

  return (
    <div>
      <div className="m-4 mb-8">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger className="w-full">
            <Input
              placeholder="Tìm bài hát, đĩa nhạc, nghệ sĩ..."
              startAdornment={<MagnifyingGlass />}
              aria-expanded={open}
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
              endAdornment={
                keyword ? (
                  <X
                    onClick={(e) => {
                      e.preventDefault();
                      setKeyword("");
                    }}
                  />
                ) : null
              }
            />
          </PopoverTrigger>
          <PopoverContent
            side="bottom"
            align="start"
            className="p-2 w-[calc(100vw-2rem)]"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            {items.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="gap-2 text-foreground p-2 w-full justify-start rounded-lg"
                onClick={() => {
                  setKeyword(item);
                  setOpen(false);
                }}
              >
                <ClockCounterClockwise className="text-lg" />
                <p className="text-sm">{item}</p>
              </Button>
            ))}
          </PopoverContent>
        </Popover>
      </div>
      {keyword ? <SearchResults /> : <RecentlyPlayed />}
    </div>
  );
};
