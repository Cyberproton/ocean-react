import { AppRoute } from "@/routes/routes";
import { Gear, SignOut, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import {
  Tile,
  TileAdornment,
  TileContent,
  TileSubtitle,
  TileTitle,
} from "./Tile";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const UserButton = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Avatar className="h-8 w-8 mx-4">
          <AvatarImage src="https://avatars.githubusercontent.com/u/66234343?v=4" />
        </Avatar>
      </SheetTrigger>
      <SheetContent className="px-0">
        <Link to={AppRoute.PROFILE}>
          <Tile className="mb-4">
            <TileAdornment className="w-12 h-12">
              <Avatar className="w-12 h-12">
                <AvatarImage src="https://avatars.githubusercontent.com/u/66234343?v=4" />
              </Avatar>
            </TileAdornment>
            <TileContent>
              <TileTitle>Trần Hoàng Quân</TileTitle>
              <TileSubtitle>@Cyberproton</TileSubtitle>
            </TileContent>
          </Tile>
        </Link>
        <Link to={AppRoute.PROFILE}>
          <Tile>
            <User />
            <TileContent>
              <TileTitle>Tài khoản của tôi</TileTitle>
            </TileContent>
          </Tile>
        </Link>
        <Link to={AppRoute.SETTINGS}>
          <Tile>
            <Gear />
            <TileContent>
              <TileTitle>Cài đặt</TileTitle>
            </TileContent>
          </Tile>
        </Link>
        <Separator className="my-2" />
        <Tile>
          <SignOut />
          <TileContent>
            <TileTitle>Đăng xuất</TileTitle>
          </TileContent>
        </Tile>
      </SheetContent>
    </Sheet>
  );
};
