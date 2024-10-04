import { Album } from "@/features/album/models/album";
import { Artist } from "@/features/artist/models/artist";
import { Playlist } from "@/features/playlist/models/playlist";
import { Track } from "@/features/track/models/track";

export enum CollectionItemType {
  SAVED_ALBUM = "SAVED_ALBUM",
  FOLLOWED_ARTIST = "FOLLOWED_ARTIST",
  CREATED_PLAYLIST = "CREATED_PLAYLIST",
  SAVED_PLAYLIST = "SAVED_PLAYLIST",
  LIKED_TRACK = "LIKED_TRACK",
}

export enum CollectionItemSort {
  CREATED_AT = "CREATED_AT",
  LAST_ACCESS_AT = "LAST_ACCESS_AT",
}

export type CollectionItem = {
  id: number;
  type: CollectionItemType;
  album: Album;
  artist: Artist;
  playlist: Playlist;
  track: Track;
  updatedAt: string;
};
