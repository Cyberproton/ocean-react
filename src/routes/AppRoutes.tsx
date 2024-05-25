import { EmailVerificationPage } from "@/features/auth/pages/EmailVerificationPage";
import { LoginPage } from "@/features/auth/pages/LoginPage";
import { PasswordResetPage } from "@/features/auth/pages/PasswordResetPage";
import { RegisterPage } from "@/features/auth/pages/RegisterPage";
import { LibraryPage } from "@/features/library/pages/LibraryPage";
import { HomePage } from "@/features/misc/pages/HomePage";
import { ProfileEditPage } from "@/features/profile/pages/ProfileEditPage";
import { ProfileFollowersPage } from "@/features/profile/pages/ProfileFollowersPage";
import { ProfileFollowingsPage } from "@/features/profile/pages/ProfileFollowingsPage";
import { ProfilePage } from "@/features/profile/pages/ProfilePage";
import { ProfilePlaylistsPage } from "@/features/profile/pages/ProfilePlaylistsPage";
import { RankingsPage } from "@/features/rankings/pages/RankingsPage";
import { SearchPage } from "@/features/search/pages/SearchPage";
import { SettingsPage } from "@/features/settings/pages/SettingsPage";
import { useRoutes } from "react-router-dom";
import { AppRoute } from "./routes";

export const AppRoutes = () => {
  const element = useRoutes([
    {
      path: AppRoute.HOME,
      element: <HomePage />,
    },
    {
      path: AppRoute.LOGIN,
      element: <LoginPage />,
    },
    {
      path: AppRoute.REGISTER,
      element: <RegisterPage />,
    },
    {
      path: AppRoute.EMAIL_VERIFICATION,
      element: <EmailVerificationPage />,
    },
    {
      path: AppRoute.PASSWORD_RESET,
      element: <PasswordResetPage />,
    },
    {
      path: AppRoute.PROFILE,
      element: <ProfilePage />,
    },
    {
      path: AppRoute.PROFILE_EDIT,
      element: <ProfileEditPage />,
    },
    {
      path: AppRoute.PROFILE_FOLLOWERS,
      element: <ProfileFollowersPage />,
    },
    {
      path: AppRoute.PROFILE_FOLLOWINGS,
      element: <ProfileFollowingsPage />,
    },
    {
      path: AppRoute.PROFILE_PLAYLISTS,
      element: <ProfilePlaylistsPage />,
    },
    {
      path: AppRoute.SEARCH,
      element: <SearchPage />,
    },
    {
      path: AppRoute.ADVANCED_SEARCH,
      element: <h1>Advanced Search Page</h1>,
    },
    {
      path: AppRoute.LIBRARY,
      element: <LibraryPage />,
    },
    {
      path: AppRoute.EXPLORE,
      element: <RankingsPage />,
    },
    {
      path: AppRoute.TRACK,
      element: <h1>Track Page</h1>,
    },
    {
      path: AppRoute.ALBUM,
      element: <h1>Album Page</h1>,
    },
    {
      path: AppRoute.PLAYLIST,
      element: <h1>Playlist Page</h1>,
    },
    {
      path: AppRoute.SETTINGS,
      element: <SettingsPage />,
    },
    {
      path: AppRoute.NOT_FOUND,
      element: <h1>Not Found</h1>,
    },
  ]);

  return element;
};
