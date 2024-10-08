import { ImageResponse } from "@/features/file/models/file";

export type Profile = {
  id: number;
  username: string | undefined;
  name: string | undefined;
  bio: string | undefined;
  avatars?: ImageResponse[];
  banners?: ImageResponse[];
  isFollowedByCurrentUser?: boolean;
};

export type UpdateProfile = {
  name: string | undefined;
  bio: string | undefined;
};
