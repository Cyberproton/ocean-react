import { QuickTile } from "@/components/Tile";
import { TopBarWithProps } from "@/components/TopBar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DotsThreeOutlineVertical } from "@phosphor-icons/react";

export const ProfilePlaylistsPage = () => {
  return (
    <>
      <TopBarWithProps showBackButton title="Danh sách phát" />
      <QuickTile
        title="Thong thả"
        subtitle="Danh sách phát - Tạo bởi Hoàng Quân - 32 bài hát"
        leading={
          <Avatar>
            <AvatarImage src="https://marketplace.canva.com/EAEdeiU-IeI/1/0/1600w/canva-purple-and-red-orange-tumblr-aesthetic-chill-acoustic-classical-lo-fi-playlist-cover-jGlDSM71rNM.jpg" />
          </Avatar>
        }
        trailing={
          <Button variant="ghost" size="icon">
            <DotsThreeOutlineVertical weight="fill" />
          </Button>
        }
      />
      <QuickTile
        title="Thong thả"
        subtitle="Danh sách phát - Tạo bởi Hoàng Quân - 32 bài hát"
        leading={
          <Avatar>
            <AvatarImage src="https://marketplace.canva.com/EAEdeiU-IeI/1/0/1600w/canva-purple-and-red-orange-tumblr-aesthetic-chill-acoustic-classical-lo-fi-playlist-cover-jGlDSM71rNM.jpg" />
          </Avatar>
        }
        trailing={<Button variant="outline">OK</Button>}
      />
    </>
  );
};
