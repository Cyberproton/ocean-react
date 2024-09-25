import { selectAuth } from "@/features/auth/stores/auth-slice";
import { useSelector } from "react-redux";

export const useAuth = () => {
  return useSelector(selectAuth);
};
