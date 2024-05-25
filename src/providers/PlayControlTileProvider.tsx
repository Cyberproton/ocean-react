import {
  PlayControlTileContext,
  PlayControlTileProviderProps,
} from "@/contexts/play-control-tile";
import { useState } from "react";

export const PlayControlTileProvider = ({
  children,
}: PlayControlTileProviderProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  return (
    <PlayControlTileContext.Provider
      value={{ isPlaying, isHidden, setIsPlaying, setIsHidden }}
    >
      {children}
    </PlayControlTileContext.Provider>
  );
};
