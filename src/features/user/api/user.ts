import { authApi } from "@/api/auth-api";
import { ApiQueryOrNullOrUndefined, PaginationResponse } from "@/api/dto";
import { Profile } from "@/features/profile/models/profile";
import { CountFollowersAndFollowingsDto } from "@/features/user/dto/user";
import { transformStandardResponse } from "@/utils/api";

export const userApi = authApi.injectEndpoints({
  endpoints: (builder) => ({
    updateMyUsername: builder.mutation({
      query: (body: { username: string }) => ({
        url: "users/me/username",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [{ type: "Profiles", id: "ME" }],
    }),
    getMyFollowings: builder.query<
      PaginationResponse<Profile>,
      ApiQueryOrNullOrUndefined
    >({
      query: (params) => ({ url: "users/me/following", params: params }),
      transformResponse: transformStandardResponse,
    }),
    getMyFollowers: builder.query<
      PaginationResponse<Profile>,
      ApiQueryOrNullOrUndefined
    >({
      query: (params) => ({ url: "users/me/followers", params: params }),
      transformResponse: transformStandardResponse,
    }),
    countMyFollowersAndFollowings: builder.query<
      CountFollowersAndFollowingsDto,
      void
    >({
      query: () => ({ url: "users/me/followers/count" }),
      transformResponse: transformStandardResponse,
    }),
  }),
});

export const {
  useUpdateMyUsernameMutation,
  useGetMyFollowingsQuery,
  useGetMyFollowersQuery,
  useCountMyFollowersAndFollowingsQuery,
} = userApi;
