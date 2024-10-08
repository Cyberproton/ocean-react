import { TopBarWithProps } from "@/components/TopBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProfileTile } from "@/features/profile/components/ProfileTile";
import { useGetMyFollowersQuery } from "@/features/user/api/user";

export const ProfileFollowersPage = () => {
  const followersQuery = useGetMyFollowersQuery(null);
  const followers = followersQuery.data?.items ?? [];

  return (
    <>
      <TopBarWithProps showBackButton title="Người theo dõi" />
      <ScrollArea>
        {followersQuery.isSuccess && followers.length > 0
          ? followers.map((f) => <ProfileTile key={f.id} profile={f} />)
          : null}
      </ScrollArea>
    </>
  );
};
