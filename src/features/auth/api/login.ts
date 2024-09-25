import { nonAuthApi } from "@/api/non-auth-api";
import { User } from "@/features/auth/model/User";

export const loginApi = nonAuthApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: { email: string; password: string }) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
      transformResponse: (response: {
        data: {
          accessToken: string;
          refreshToken: string;
          user: User;
        };
      }) => response.data,
    }),
  }),
  overrideExisting: true,
});

export const { useLoginMutation } = loginApi;
