import { ApiQuery } from "@/api/dto";
import { Album } from "@/features/album/models/album";
import { Artist } from "@/features/artist/models/artist";
import { User } from "@/features/auth/model/User";
import { Playlist } from "@/features/playlist/models/playlist";
import { Track } from "@/features/track/models/track";

export enum HistoryType {
  ALBUM = "ALBUM",
  ARTIST = "ARTIST",
  PLAYLIST = "PLAYLIST",
  TRACK = "TRACK",
}

export type History = {
  id: number;
  type: HistoryType;
  user: User;
  updatedAt: Date;
  album: Album;
  artist: Artist;
  playlist: Playlist;
  track: Track;
};

export type HistoryQuery = ApiQuery & {
  types?: HistoryType[];
};
