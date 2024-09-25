import { Button } from "@/components/ui/button";
import { useAuth } from "@/features/auth/hooks/auth";
import { AppRoute } from "@/routes/routes";
import React from "react";
import { Link } from "react-router-dom";

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();

  return (
    <>
      {auth.isAuthenticated ? (
        children
      ) : (
        <div className="flex flex-1 flex-col gap-4 items-center justify-center h-[calc(100vh*3/5)] w-full">
          <p>You need to login to view this page.</p>
          <Link to={AppRoute.LOGIN}>
            <Button>Go to login</Button>
          </Link>
        </div>
      )}
    </>
  );
};
