import { useAuth } from "@/features/auth/hooks/auth";
import React from "react";

export const AuthVisibility = ({
  visibilityIfAuthenticated = "show",
  children,
}: {
  visibilityIfAuthenticated?: "show" | "hidden";
  children: React.ReactNode;
}) => {
  const auth = useAuth();
  if (visibilityIfAuthenticated === "hidden") {
    if (auth.isAuthenticated) {
      return null;
    }
    return children;
  }
  if (!auth.isAuthenticated) {
    return null;
  }
  return children;
};
