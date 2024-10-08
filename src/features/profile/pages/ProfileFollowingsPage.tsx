import { TopBarWithProps } from "@/components/TopBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProfileTile } from "@/features/profile/components/ProfileTile";
import { useGetMyFollowingsQuery } from "@/features/user/api/user";

export const ProfileFollowingsPage = () => {
  const followingQuery = useGetMyFollowingsQuery(null);
  const followings = followingQuery.data?.items ?? [];

  return (
    <>
      <TopBarWithProps showBackButton title="Đang theo dõi" />
      <ScrollArea>
        {followingQuery.isSuccess && followings.length > 0
          ? followings.map((f) => <ProfileTile key={f.id} profile={f} />)
          : null}
      </ScrollArea>
    </>
  );
};
