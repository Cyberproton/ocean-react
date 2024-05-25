import { AppRoute } from "@/routes/routes";
import { cn } from "@/utils";
import { Gear, IconContext } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { BackButton } from "./BackButton";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export const TOP_BAR_HEIGHT = 16;

export const TopBar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const heightClassName = `h-${TOP_BAR_HEIGHT}`;

  return (
    <IconContext.Provider
      value={{
        size: 24,
      }}
    >
      {/* Dummy height in place of the floating top bar */}
      <div className={cn(heightClassName, className)}>
        <div
          ref={ref}
          className={cn(
            "flex py-3 items-center fixed w-full bg-background z-50 border-b border-gray-300",
            className
          )}
          {...props}
        />
      </div>
    </IconContext.Provider>
  );
});

export const TopBarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("flex-grow", className)} {...props} />;
});

export const HomeTopBar = () => {
  return (
    <TopBar>
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
    </TopBar>
  );
};

export const TopBarWithProps = (props: {
  showBackButton?: boolean;
  leading?: React.ReactNode;
  title?: React.ReactNode;
  trailing?: React.ReactNode;
}) => {
  const { showBackButton, leading, title, trailing } = props;

  const heightClassName = `h-${TOP_BAR_HEIGHT}`;

  return (
    <IconContext.Provider
      value={{
        size: 24,
      }}
    >
      <div className={heightClassName}>
        <div className="flex py-3 items-center fixed w-full bg-background z-50 border-b border-border">
          {showBackButton && <BackButton />}
          {leading}
          <div className="text-xl">{title}</div>
          <div className="grow"></div>
          {trailing}
        </div>
      </div>
    </IconContext.Provider>
  );
};
