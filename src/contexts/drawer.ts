import { createContext, useContext } from "react";

export type DrawerState = {
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
};

const initialState: DrawerState = {
  isOpen: false,
  openDrawer: () => null,
  closeDrawer: () => null,
  toggleDrawer: () => null,
};

export const DrawerContext = createContext<DrawerState>(initialState);

export const useDrawer = () => {
  const context = useContext(DrawerContext);

  if (context === undefined)
    throw new Error("useDrawer must be used within a DrawerProvider");

  return context;
};
