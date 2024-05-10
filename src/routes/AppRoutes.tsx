import { EmailVerificationPage } from "@/features/auth/pages/EmailVerificationPage";
import { LoginPage } from "@/features/auth/pages/LoginPage";
import { PasswordResetPage } from "@/features/auth/pages/PasswordResetPage";
import { RegisterPage } from "@/features/auth/pages/RegisterPage";
import { LibraryPage } from "@/features/library/pages/LibraryPage";
import { HomePage } from "@/features/misc/pages/HomePage";
import { ProfileEditPage } from "@/features/profile/pages/ProfileEditPage";
import { ProfilePage } from "@/features/profile/pages/ProfilePage";
import { RankingsPage } from "@/features/rankings/pages/RankingsPage";
import { SearchPage } from "@/features/search/pages/SearchPage";
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
      element: <h1>Settings Page</h1>,
    },
    {
      path: AppRoute.NOT_FOUND,
      element: <h1>Not Found</h1>,
    },
  ]);

  return element;
};
