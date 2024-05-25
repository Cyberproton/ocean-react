import { TileWithInlineProps } from "@/components/Tile";
import { TopBarWithProps } from "@/components/TopBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const ProfileFollowersPage = () => {
  return (
    <>
      <TopBarWithProps showBackButton title="Người theo dõi" />
      <TileWithInlineProps
        leading={
          <Avatar>
            <AvatarFallback>W</AvatarFallback>
          </Avatar>
        }
        title="Wanki"
        subtitle="Nghệ sĩ"
        trailing={<Button variant="outline">Theo dõi</Button>}
      />
      <TileWithInlineProps
        leading={
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/66234343?v=4" />
            <AvatarFallback>W</AvatarFallback>
          </Avatar>
        }
        overline="Đang theo dõi"
        title="Hoàng Quân"
        subtitle="Nghệ sĩ"
        trailing={<Button variant="outline">Hủy theo dõi</Button>}
      />

      <TileWithInlineProps
        leading={
          <Avatar>
            <AvatarFallback>W</AvatarFallback>
          </Avatar>
        }
        title="Wanki"
        subtitle="Nghệ sĩ"
        trailing={<Button variant="outline">Theo dõi</Button>}
      />
    </>
  );
};
