import { EmailVerificationPage } from "@/features/auth/pages/EmailVerificationPage";
import { LoginPage } from "@/features/auth/pages/LoginPage";
import { PasswordResetPage } from "@/features/auth/pages/PasswordResetPage";
import { RegisterPage } from "@/features/auth/pages/RegisterPage";
import { HomePage } from "@/features/misc/pages/HomePage";
import { ProfilePage } from "@/features/profile/pages/ProfilePage";
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
      path: AppRoute.SEARCH,
      element: <h1>Search Page</h1>,
    },
    {
      path: AppRoute.ADVANCED_SEARCH,
      element: <h1>Advanced Search Page</h1>,
    },
    {
      path: AppRoute.LIBRARY,
      element: <h1>Library Page</h1>,
    },
    {
      path: AppRoute.EXPLORE,
      element: <h1>Explore Page</h1>,
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
