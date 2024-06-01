import { TrackPlay } from "@/components/TrackPlay/TrackPlay";
import { TrackPlayTile } from "@/components/TrackPlay/TrackPlayTile";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useDrawer } from "@/contexts/drawer";
import { usePlayControl } from "@/contexts/play-control";
import { AppRoute } from "@/routes/routes";
import {
  CardsThree,
  House,
  IconContext,
  MagnifyingGlass,
  Ranking,
} from "@phosphor-icons/react";
import { useLocation, useNavigate } from "react-router-dom";

export const BottomBarItem = (props: {
  icon: React.ReactNode;
  title: string;
  navigateTo?: string;
}) => {
  const { icon, title, navigateTo } = props;

  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === navigateTo;

  return (
    <div
      className="flex flex-1 items-center flex-col p-2"
      onClick={navigateTo ? () => navigate(navigateTo) : undefined}
    >
      <IconContext.Provider
        value={{
          size: 32,
          weight: isActive ? "fill" : undefined,
        }}
      >
        {icon}
      </IconContext.Provider>
      {isActive ? (
        <p className="text-sm font-bold">{title}</p>
      ) : (
        <p className="text-sm">{title}</p>
      )}
    </div>
  );
};

export const BottomBar = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="h-16" {...props}>
      <div className="flex bg-secondary fixed bottom-0 left-0 right-0">
        <BottomBarItem
          icon={<House />}
          title="Trang chủ"
          navigateTo={AppRoute.HOME}
        />
        <BottomBarItem
          icon={<MagnifyingGlass />}
          title="Tìm kiếm"
          navigateTo={AppRoute.SEARCH}
        />
        <BottomBarItem
          icon={<Ranking />}
          title="Xếp hạng"
          navigateTo={AppRoute.EXPLORE}
        />
        <BottomBarItem
          icon={<CardsThree />}
          title="Thư viện"
          navigateTo={AppRoute.LIBRARY}
        />
      </div>
    </div>
  );
};

export const BottomBarWithPlayControl = (
  props: React.HTMLAttributes<HTMLDivElement>
) => {
  const control = usePlayControl();
  const { isOpen, openDrawer, closeDrawer } = useDrawer();

  return (
    <div className="h-40" {...props}>
      <Drawer
        preventScrollRestoration={false}
        open={isOpen}
        onClose={closeDrawer}
      >
        <div
          className="text-start fixed bottom-[4.2rem] left-0 right-0"
          hidden={control.isHidden}
        >
          <TrackPlayTile
            className="bg-secondary"
            onClick={() => {
              openDrawer();
            }}
          />
        </div>
        <DrawerContent showDragHandle={false} className="h-screen rounded-none">
          <TrackPlay useCloseDrawerFunction={closeDrawer} />
        </DrawerContent>
      </Drawer>
      <div className="flex bg-secondary fixed bottom-0 left-0 right-0">
        <BottomBarItem
          icon={<House />}
          title="Trang chủ"
          navigateTo={AppRoute.HOME}
        />
        <BottomBarItem
          icon={<MagnifyingGlass />}
          title="Tìm kiếm"
          navigateTo={AppRoute.SEARCH}
        />
        <BottomBarItem
          icon={<Ranking />}
          title="Xếp hạng"
          navigateTo={AppRoute.EXPLORE}
        />
        <BottomBarItem
          icon={<CardsThree />}
          title="Thư viện"
          navigateTo={AppRoute.LIBRARY}
        />
      </div>
    </div>
  );
};
