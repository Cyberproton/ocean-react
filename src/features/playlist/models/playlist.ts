import { ImageResponse } from "@/features/file/models/file";
import { Profile } from "@/features/profile/models/profile";

export type Playlist = {
  id: number;
  name: string;
  description: string;
  covers: ImageResponse[];
  owner?: Profile;
  totalTracks: number;
  popularity: number;
  isSavedByCurrentUser?: boolean;
};
