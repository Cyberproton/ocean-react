import { BottomBarWithPlayControl } from "@/components/BottomBar";
import { useAuth } from "@/features/auth/hooks/auth";
import { selectAuth } from "@/features/auth/stores/auth-slice";
import { DrawerProvider } from "@/providers/DrawerProvider";
import { AppRoute } from "@/routes/routes";
import { useSelector } from "react-redux";
import {
  Navigate,
  Outlet,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";

export const WithBottomBarLayout = () => {
  return (
    <>
      <Outlet />
      <DrawerProvider>
        <BottomBarWithPlayControl />
      </DrawerProvider>
    </>
  );
};

export const AppLayout = () => {
  const auth = useAuth();
  const location = useLocation();

  if (auth.isAuthenticated && location.pathname === AppRoute.LOGIN) {
    return <Navigate to={AppRoute.HOME} />;
  }

  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export const ProtectedLayout = () => {
  const auth = useSelector(selectAuth);

  if (!auth.accessToken) {
    return <Navigate to={AppRoute.LOGIN} />;
  }

  return (
    <>
      <AppLayout />
    </>
  );
};
