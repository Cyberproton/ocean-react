import { MediaCard } from "@/components/LargeCard";
import { TopBar } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { AppRoute } from "@/routes/routes";
import { PencilSimple, Playlist } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import ShowMoreText from "react-show-more-text";

export const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <TopBar
        showBackButton
        trailing={
          <Button
            variant="ghost"
            onClick={() => navigate(AppRoute.PROFILE_EDIT)}
          >
            <PencilSimple />
          </Button>
        }
      />
      <div className="relative mb-16">
        <img
          src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg"
          alt="profile"
          className="w-full h-44"
        />
        <img
          src="https://avatars.githubusercontent.com/u/66234343?v=4"
          width={100}
          height={100}
          alt="avatar"
          className="rounded-full border-2 border-white absolute -bottom-12 left-0 right-0 mx-auto"
        />
      </div>
      <div className="flex flex-col items-center m-4">
        <p className="text-3xl">Không phải tôi</p>
        <p className="text-slate-500 mt-1">@tentaikhoancuatoi</p>
        <div className="mb-4">
          <Button variant="link">100K người theo dõi</Button>
          <Button variant="link">100K đang theo dõi</Button>
        </div>
        <ShowMoreText
          lines={3}
          more={<p className="text-primary">Xem thêm</p>}
          less={<p className="text-primary">Rút gọn</p>}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </ShowMoreText>
        <div className="mt-12 w-full">
          <div className="flex items-center">
            <p className="text-xl flex-1 font-semibold">Danh sách phát</p>
            <Button variant="link">Xem thêm</Button>
          </div>
        </div>
      </div>
      <ScrollArea>
        <div className="flex gap-3 mb-4 mx-4">
          <MediaCard icon={<Playlist />} />
          <MediaCard icon={<Playlist />} />
          <MediaCard icon={<Playlist />} />
          <MediaCard />
          <MediaCard />
          <ScrollBar orientation="horizontal" />
        </div>
      </ScrollArea>
    </>
  );
};
