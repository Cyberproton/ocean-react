import { authApi } from "@/api/auth-api";

export const userApi = authApi.injectEndpoints({
  endpoints: (builder) => ({
    updateUserUsername: builder.mutation({
      query: (body: { username: string }) => ({
        url: "users/username",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [{ type: "Profiles", id: "ME" }],
    }),
  }),
});

export const { useUpdateUserUsernameMutation } = userApi;
