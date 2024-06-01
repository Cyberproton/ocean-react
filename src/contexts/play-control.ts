import { createContext, useContext } from "react";

export type PlayControlProviderProps = {
  children: React.ReactNode;
};

export type PlayControlState = {
  isPlaying: boolean;
  isHidden: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  setIsHidden: (isHidden: boolean) => void;
};

const initialState: PlayControlState = {
  isPlaying: false,
  isHidden: true,
  setIsPlaying: () => null,
  setIsHidden: () => null,
};

export const PlayControlContext = createContext<PlayControlState>(initialState);

export const usePlayControl = () => {
  const context = useContext(PlayControlContext);

  if (context === undefined)
    throw new Error("usePlay must be used within a PlayProvider");

  return context;
};
