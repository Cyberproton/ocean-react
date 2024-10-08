import { Reload } from "@/components/Reload";
import { Spinner } from "@/components/Spinner";
import { TopBarWithProps } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useGetMyProfileQuery } from "@/features/profile/api/profile";
import { Profile } from "@/features/profile/models/profile";
import { AppRoute } from "@/routes/routes";
import { compactFormatNumber } from "@/utils/number";
import { PencilSimple } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";

import { Image } from "@/components/Image";
import { useGetMyCollectionQuery } from "@/features/collection/api/collection";
import { CollectionItemType } from "@/features/collection/models/collection";
import { PlaylistCard } from "@/features/playlist/components/PlaylistCard";
import { useCountMyFollowersAndFollowingsQuery } from "@/features/user/api/user";
import { findSpecifiedImageOrFirst } from "@/utils/image";
import ShowMoreText from "react-show-more-text";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const profileQuery = useGetMyProfileQuery();
  const profile: Profile = profileQuery.data?.data;

  const countFollowersAndFollowingsQuery =
    useCountMyFollowersAndFollowingsQuery();
  const countFollowersAndFollowings = countFollowersAndFollowingsQuery.data;

  const createdPlaylistQuery = useGetMyCollectionQuery({
    types: [CollectionItemType.CREATED_PLAYLIST],
    limit: 4,
  });
  const createdPlaylists = createdPlaylistQuery.data?.items.map(
    (item) => item.playlist
  );

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

      {profileQuery.isSuccess &&
        createdPlaylistQuery.isSuccess &&
        countFollowersAndFollowingsQuery.isSuccess && (
          <>
            <div className="relative mb-16">
              {profile?.banners ? (
                <Image
                  src={
                    findSpecifiedImageOrFirst(profile.banners, {
                      width: 400,
                      height: (400 * 9) / 16,
                    })?.url
                  }
                  alt="profile"
                  className="w-full h-44 bg-gray-300"
                />
              ) : (
                <div className="w-full h-44 bg-gray-300" />
              )}
              <Image
                src={
                  findSpecifiedImageOrFirst(profile.avatars, {
                    width: 100,
                    height: 100,
                  })?.url
                }
                width={100}
                height={100}
                alt="avatar"
                className="rounded-full border-2 border-white absolute -bottom-12 left-0 right-0 mx-auto size-28 object-cover bg-secondary"
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
                    {compactFormatNumber(
                      countFollowersAndFollowings?.numberOfFollowers ?? 0
                    )}{" "}
                    người theo dõi
                  </Link>
                </Button>
                <Button variant="link">
                  <Link to={AppRoute.PROFILE_FOLLOWINGS}>
                    {compactFormatNumber(
                      countFollowersAndFollowings?.numberOfFollowings ?? 0
                    )}{" "}
                    đang theo dõi
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
            </div>
            {createdPlaylists?.length !== 0 && (
              <>
                <div className="m-4 mt-12">
                  <div className="flex items-center">
                    <p className="text-xl flex-1 font-semibold">
                      Danh sách phát
                    </p>
                    <Button variant="link">
                      <Link to={AppRoute.PROFILE_PLAYLISTS}>Xem tất cả</Link>
                    </Button>
                  </div>
                </div>
                <ScrollArea>
                  <div className="flex gap-3 mb-4 mx-4">
                    {createdPlaylists?.map((playlist) => (
                      <PlaylistCard key={playlist.id} playlist={playlist} />
                    ))}
                    <ScrollBar orientation="horizontal" />
                  </div>
                </ScrollArea>
              </>
            )}
          </>
        )}
    </>
  );
};
