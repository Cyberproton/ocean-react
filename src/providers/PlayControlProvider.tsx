import {
  PlayControlContext,
  PlayControlProviderProps,
} from "@/contexts/play-control";
import { useState } from "react";

export const PlayControlProvider = ({ children }: PlayControlProviderProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  return (
    <PlayControlContext.Provider
      value={{ isPlaying, isHidden, setIsPlaying, setIsHidden }}
    >
      {children}
    </PlayControlContext.Provider>
  );
};
