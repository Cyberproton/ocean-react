import { AuthVisibility } from "@/components/AuthVisibility";
import { useAuth } from "@/features/auth/hooks/auth";
import { clearCredentials } from "@/features/auth/stores/auth-slice";
import { AppRoute } from "@/routes/routes";
import { useAppDispatch } from "@/stores/store";
import { Gear, SignIn, SignOut, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Tile, TileContent, TileIcon, TileSubtitle, TileTitle } from "./Tile";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";

export const SideMenu = ({ onLogout }: { onLogout?: () => void }) => {
  const auth = useAuth();
  const dispatch = useAppDispatch();

  return (
    <>
      <Link to={auth.isAuthenticated ? AppRoute.PROFILE : AppRoute.LOGIN}>
        <Tile className="mb-4">
          <TileIcon className="w-12 h-12">
            {auth.isAuthenticated ? (
              <Avatar className="w-12 h-12">
                <AvatarImage src="https://avatars.githubusercontent.com/u/66234343?v=4" />
              </Avatar>
            ) : (
              <User />
            )}
          </TileIcon>
          <TileContent>
            <TileTitle>
              {auth.isAuthenticated ? "Trần Hoàng Quân" : "Ẩn danh"}
            </TileTitle>
            <TileSubtitle>
              {auth.isAuthenticated ? "@Cyberproton" : "Nhấn để đăng nhập"}
            </TileSubtitle>
          </TileContent>
        </Tile>
      </Link>
      <AuthVisibility>
        <Link to={AppRoute.PROFILE}>
          <Tile>
            <User />
            <TileContent>
              <TileTitle>Tài khoản của tôi</TileTitle>
            </TileContent>
          </Tile>
        </Link>
      </AuthVisibility>
      <Link to={AppRoute.SETTINGS}>
        <Tile>
          <Gear />
          <TileContent>
            <TileTitle>Cài đặt</TileTitle>
          </TileContent>
        </Tile>
      </Link>
      <Separator className="my-2" />
      <AuthVisibility visibilityIfAuthenticated="hidden">
        <Link to={AppRoute.LOGIN}>
          <Tile>
            <SignIn />
            <TileContent>
              <TileTitle>Đăng nhập</TileTitle>
            </TileContent>
          </Tile>
        </Link>
      </AuthVisibility>
      <AuthVisibility>
        <Tile
          onClick={() => {
            dispatch(clearCredentials());
            onLogout?.();
          }}
        >
          <SignOut />
          <TileContent>
            <TileTitle>Đăng xuất</TileTitle>
          </TileContent>
        </Tile>
      </AuthVisibility>
    </>
  );
};
