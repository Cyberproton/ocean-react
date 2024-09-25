import { Album } from "@/features/album/models/album";
import { Artist } from "@/features/artist/models/artist";

export type Track = {
  id: number;
  name: string;
  trackNumber: number;
  duration: number;
  album?: Album;
  artists?: Artist[];
  numberOfPlays: number;
  popularity: number;
};
