import { BottomBarWithPlayControl } from "@/components/BottomBar";
import { DrawerProvider } from "@/providers/DrawerProvider";
import { Outlet, ScrollRestoration } from "react-router-dom";

export const WithBottomBarLayout = () => {
  return (
    <>
      <Outlet />
      <DrawerProvider>
        <BottomBarWithPlayControl />
      </DrawerProvider>
    </>
  );
};

export const AppLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};
