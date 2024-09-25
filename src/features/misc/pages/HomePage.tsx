import logo from "@/assets/logo.svg";
import { TopBar } from "@/components/TopBar";
import { UserButton } from "@/components/UserButton";
import { WeeklyPlaylistCard } from "@/components/WeeklyPlaylistCard";
import { useAuth } from "@/features/auth/hooks/auth";
import { RecentlyPlayedTracks } from "@/features/misc/components/RecentlyPlayedTracks";
import { TrendingAlbums } from "@/features/misc/components/TrendingAlbums";
import { TrendingPlaylists } from "@/features/misc/components/TrendingPlaylists";
import { TrendingTracks } from "@/features/misc/components/TrendingTracks";
import { AuthWelcomeText } from "@/features/misc/components/WelcomeText";

export const HomePage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <TopBar>
        <img src={logo} alt="logo" className="h-10 ml-4 mr-4" />
        <div className="grow"></div>
        <UserButton />
      </TopBar>
      <div className="mx-4 mt-4">
        {isAuthenticated ? (
          <AuthWelcomeText />
        ) : (
          <p className="text-lg">Xin chào</p>
        )}
        <p className="text-xl font-bold">Ngày mới, nhạc mới!</p>
        <div className="mt-4">
          <WeeklyPlaylistCard />
        </div>
      </div>
      <RecentlyPlayedTracks />
      <TrendingTracks />
      <TrendingAlbums />
      <TrendingPlaylists />
    </>
  );
};
