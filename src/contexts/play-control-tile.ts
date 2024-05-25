import { createContext, useContext } from "react";

export type PlayControlTileProviderProps = {
  children: React.ReactNode;
};

export type PlayControlTileState = {
  isPlaying: boolean;
  isHidden: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  setIsHidden: (isHidden: boolean) => void;
};

const initialState: PlayControlTileState = {
  isPlaying: false,
  isHidden: true,
  setIsPlaying: () => null,
  setIsHidden: () => null,
};

export const PlayControlTileContext =
  createContext<PlayControlTileState>(initialState);

export const usePlayControlTile = () => {
  const context = useContext(PlayControlTileContext);

  if (context === undefined)
    throw new Error("usePlay must be used within a PlayProvider");

  return context;
};
