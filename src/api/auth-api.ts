import { getAuthBaseQueryWithAutoRefresh } from "@/features/auth/utils/api";
import { createApi } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: getAuthBaseQueryWithAutoRefresh(),
  endpoints: () => ({}),
  tagTypes: ["Profiles"],
});
