import { BackButton } from "@/components/BackButton";
import { TopBar, TopBarTitle } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Microphone } from "@phosphor-icons/react";

export const SearchByLyricsPage = () => {
  return (
    <>
      <TopBar>
        <BackButton />
        <TopBarTitle>Tìm kiếm bằng lời nhạc</TopBarTitle>
      </TopBar>
      <ScrollArea>
        <div className="m-4">
          <div className="flex flex-col items-center gap-4 mt-8 mb-8">
            <Button variant="outline" size="icon-2xl">
              <Microphone weight="fill" />
            </Button>
            <p>Nhấn vào nút và nói lời nhạc</p>
          </div>
          <Label htmlFor="lyrics-input" className="text-base">
            Lời nhạc
          </Label>
          <div className="flex items-center space-x-2 my-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">
              Xóa lời nhạc cũ sau khi ghi âm
            </Label>
          </div>
          <Textarea
            id="lyrics-input"
            className="mt-2"
            placeholder="Nhập lời nhạc hoặc sử dụng giọng nói"
            rows={5}
          />
        </div>
      </ScrollArea>
    </>
  );
};
