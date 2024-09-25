import { useGetMyProfileQuery } from "@/features/profile/api/profile";

export const AuthWelcomeText = () => {
  const profileQuery = useGetMyProfileQuery();

  return <p className="text-lg">Xin chào, {profileQuery.data?.data?.name}</p>;
};
