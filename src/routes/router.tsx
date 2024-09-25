import { AlbumPage } from "@/features/album/pages/AlbumPage";
import { EmailVerificationPage } from "@/features/auth/pages/EmailVerificationPage";
import { LoginPage } from "@/features/auth/pages/LoginPage";
import { PasswordResetPage } from "@/features/auth/pages/PasswordResetPage";
import { RegisterPage } from "@/features/auth/pages/RegisterPage";
import { LibraryPage } from "@/features/library/pages/LibraryPage";
import { HomePage } from "@/features/misc/pages/HomePage";
import { PlaylistEditPage } from "@/features/playlist/pages/PlaylistEditPage";
import { PlaylistPage } from "@/features/playlist/pages/PlaylistPage";
import { ProfileEditPage } from "@/features/profile/pages/ProfileEditPage";
import { ProfileFollowersPage } from "@/features/profile/pages/ProfileFollowersPage";
import { ProfileFollowingsPage } from "@/features/profile/pages/ProfileFollowingsPage";
import { ProfilePage } from "@/features/profile/pages/ProfilePage";
import { ProfilePlaylistsPage } from "@/features/profile/pages/ProfilePlaylistsPage";
import { RankingsPage } from "@/features/rankings/pages/RankingsPage";
import { SearchByLyricsPage } from "@/features/search/pages/SearchByLyricsPage";
import { SearchBySoundPage } from "@/features/search/pages/SearchBySoundPage";
import { SearchPage } from "@/features/search/pages/SearchPage";
import { SettingsPage } from "@/features/settings/pages/SettingsPage";
import { AppLayout, WithBottomBarLayout } from "@/routes/layout";
import { AppRoute } from "@/routes/routes";
import { createBrowserRouter } from "react-router-dom";

// This file is a router configuration file. It is used to define the routes of the application.
// Use ScrollRestoration to scroll to the top of the page when the route changes.
export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <WithBottomBarLayout />,
        children: [
          { path: AppRoute.HOME, element: <HomePage /> },
          { path: AppRoute.PROFILE, element: <ProfilePage /> },
          { path: AppRoute.PROFILE_EDIT, element: <ProfileEditPage /> },
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
          { path: AppRoute.SEARCH, element: <SearchPage /> },
          { path: AppRoute.SEARCH_BY_LYRICS, element: <SearchByLyricsPage /> },
          { path: AppRoute.SEARCH_BY_SOUND, element: <SearchBySoundPage /> },
          { path: AppRoute.ADVANCED_SEARCH, element: <h1>Advanced Search</h1> },
          { path: AppRoute.LIBRARY, element: <LibraryPage /> },
          { path: AppRoute.EXPLORE, element: <RankingsPage /> },
          { path: AppRoute.TRACK, element: <h1>Track Page</h1> },
          { path: AppRoute.ALBUM, element: <AlbumPage /> },
          { path: AppRoute.PLAYLIST, element: <PlaylistPage /> },
          { path: AppRoute.PLAYLIST_EDIT, element: <PlaylistEditPage /> },
          { path: AppRoute.SETTINGS, element: <SettingsPage /> },
        ],
      },
      { path: AppRoute.LOGIN, element: <LoginPage /> },
      { path: AppRoute.REGISTER, element: <RegisterPage /> },
      { path: AppRoute.EMAIL_VERIFICATION, element: <EmailVerificationPage /> },
      { path: AppRoute.PASSWORD_RESET, element: <PasswordResetPage /> },
      { path: "*", element: <h1>Not found</h1> },
    ],
  },
]);
