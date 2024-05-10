import { AppRoute } from "@/routes/routes";
import { ArrowLeft, Gear, IconContext } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export const TOP_BAR_HEIGHT = 16;

export const HomeTopBar = () => {
  const heightClassName = `h-${TOP_BAR_HEIGHT}`;

  return (
    <div className={heightClassName}>
      <div className="flex py-3 items-center fixed w-full bg-background z-50 shadow">
        <img src={logo} alt="logo" className="h-10 ml-4 mr-4" />
        <div className="grow"></div>

        <Button variant="ghost" asChild>
          <Link to={AppRoute.SETTINGS}>
            <Gear className="text-2xl" />
          </Link>
        </Button>

        <Button variant="ghost" asChild>
          <Link to={AppRoute.PROFILE}>
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://avatars.githubusercontent.com/u/66234343?v=4" />
            </Avatar>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export const TopBar = (props: {
  showBackButton?: boolean;
  leading?: React.ReactNode;
  title?: React.ReactNode;
  trailing?: React.ReactNode;
}) => {
  const { showBackButton, leading, title, trailing } = props;
  const navigate = useNavigate();

  const heightClassName = `h-${TOP_BAR_HEIGHT}`;

  return (
    <IconContext.Provider
      value={{
        size: 24,
      }}
    >
      <div className={heightClassName}>
        <div className="flex py-3 items-center fixed w-full bg-background z-50 border-b border-gray-300">
          {showBackButton && (
            <Button
              variant="ghost"
              onClick={() => {
                if (
                  (window.history?.length && window.history.length > 1) ||
                  window.history.state?.idx
                ) {
                  navigate(-1);
                } else {
                  navigate(AppRoute.HOME, { replace: true });
                }
              }}
            >
              <ArrowLeft />
            </Button>
          )}
          {leading}
          {title}
          <div className="grow"></div>
          {trailing}
        </div>
      </div>
    </IconContext.Provider>
  );
};
