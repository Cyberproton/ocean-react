import { authApi } from "@/api/auth-api";
import { UpdateProfile } from "@/features/profile/models/profile";

export const profileApi = authApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyProfile: builder.query({
      query: (arg: void) => ({
        url: "profiles/me",
        method: "GET",
      }),
      providesTags: [{ type: "Profiles", id: "ME" }],
    }),
    updateProfile: builder.mutation({
      query: (body: UpdateProfile) => ({
        url: "profiles/me",
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "Profiles", id: "ME" }],
    }),
    updateProfileAvatar: builder.mutation({
      query: (file: File | Blob) => {
        const formData = new FormData();
        formData.append("attachment", file);

        return {
          url: "profiles/me/avatar",
          method: "PATCH",
          body: formData,
        };
      },
      invalidatesTags: [{ type: "Profiles", id: "ME" }],
    }),
    updateProfileBanner: builder.mutation({
      query: (file: File | Blob) => {
        const formData = new FormData();
        formData.append("attachment", file);

        return {
          url: "profiles/me/banner",
          method: "PATCH",
          body: formData,
        };
      },
      invalidatesTags: [{ type: "Profiles", id: "ME" }],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetMyProfileQuery,
  useUpdateProfileMutation,
  useUpdateProfileAvatarMutation,
  useUpdateProfileBannerMutation,
} = profileApi;
