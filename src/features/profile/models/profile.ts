export type Profile = {
  id: number;
  username: string | undefined;
  name: string | undefined;
  bio: string | undefined;
  avatarUrl: string | undefined;
  bannerUrl: string | undefined;
  numberOfFollowers: number;
  numberOfFollowings: number;
};

export type UpdateProfile = {
  name: string | undefined;
  bio: string | undefined;
};
