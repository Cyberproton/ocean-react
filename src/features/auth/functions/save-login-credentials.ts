import { User } from "@/features/auth/model/User";

export const saveAuthCredentialToLocalStorage = ({
  user,
  accessToken,
  refreshToken,
}: {
  user: User;
  accessToken: string;
  refreshToken: string;
}) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

export const getAuthCredentialFromLocalStorage = () => {
  const savedUser = localStorage.getItem("user");
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  return {
    user: savedUser ? (JSON.parse(savedUser) as User) : null,
    accessToken: accessToken,
    refreshToken: refreshToken,
    isAuthenticated: accessToken != null,
  };
};

export const clearAuthCredentialFromLocalStorage = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};
