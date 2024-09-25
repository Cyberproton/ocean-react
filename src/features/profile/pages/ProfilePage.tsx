import { ContentCard } from "@/components/ContentCard";
import { Reload } from "@/components/Reload";
import { Spinner } from "@/components/Spinner";
import { TopBarWithProps } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useGetMyProfileQuery } from "@/features/profile/api/profile";
import { Profile } from "@/features/profile/models/profile";
import { AppRoute } from "@/routes/routes";
import { compactFormatNumber } from "@/utils/number";
import { PencilSimple, Playlist } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";

import { Image } from "@/components/Image";
import ShowMoreText from "react-show-more-text";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const profileQuery = useGetMyProfileQuery();
  const profile: Profile = profileQuery.data?.data;

  return (
    <>
      <TopBarWithProps
        showBackButton
        trailing={
          <Button
            variant="ghost"
            onClick={() => navigate(AppRoute.PROFILE_EDIT)}
          >
            <PencilSimple />
          </Button>
        }
      />

      {profileQuery.isError && (
        <Reload onReload={profileQuery.refetch} className="h-80" />
      )}

      {profileQuery.isLoading && (
        <div className="flex justify-center items-center h-[calc(100vh*3/5)]">
          <Spinner className="text-4xl" />
        </div>
      )}

      {profileQuery.isSuccess && (
        <>
          <div className="relative mb-16">
            {profile?.bannerUrl ? (
              <Image
                src={profile?.bannerUrl}
                alt="profile"
                className="w-full h-44"
              />
            ) : (
              <div className="w-full h-44 bg-gray-300" />
            )}
            <Image
              src={profile?.avatarUrl}
              width={100}
              height={100}
              alt="avatar"
              className="rounded-full border-2 border-white absolute -bottom-12 left-0 right-0 mx-auto size-28 object-cover"
              showSkeleton={false}
            />
          </div>
          <div className="flex flex-col items-center m-4">
            {profile.name && <p className="text-3xl">{profile.name}</p>}
            {profile.username && (
              <p
                className={
                  profile.name ? "text-slate-500 mt-1" : "text-2xl my-1"
                }
              >
                @{profile.username}
              </p>
            )}
            <div className="mb-4">
              <Button variant="link">
                <Link to={AppRoute.PROFILE_FOLLOWERS}>
                  {compactFormatNumber(profile.numberOfFollowers)} người theo
                  dõi
                </Link>
              </Button>
              <Button variant="link">
                <Link to={AppRoute.PROFILE_FOLLOWINGS}>
                  {compactFormatNumber(profile.numberOfFollowings)} đang theo
                  dõi
                </Link>
              </Button>
            </div>
            {profile.bio && (
              <ShowMoreText
                lines={3}
                more={<p className="text-primary">Xem thêm</p>}
                less={<p className="text-primary">Rút gọn</p>}
              >
                {profile.bio}
              </ShowMoreText>
            )}
            <div className="mt-12 w-full">
              <div className="flex items-center">
                <p className="text-xl flex-1 font-semibold">Danh sách phát</p>
                <Button variant="link">
                  <Link to={AppRoute.PROFILE_PLAYLISTS}>Xem tất cả</Link>
                </Button>
              </div>
            </div>
          </div>
          <ScrollArea>
            <div className="flex gap-3 mb-4 mx-4">
              <ContentCard size="md" actionIcon={<Playlist />} />
              <ContentCard size="md" actionIcon={<Playlist />} />
              <ContentCard size="md" actionIcon={<Playlist />} />
              <ContentCard />
              <ContentCard />
              <ScrollBar orientation="horizontal" />
            </div>
          </ScrollArea>
        </>
      )}
    </>
  );
};
