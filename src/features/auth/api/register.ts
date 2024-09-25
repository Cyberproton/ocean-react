import { nonAuthApi } from "@/api/non-auth-api";

export const registerApi = nonAuthApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body: { email: string; password: string }) => ({
        url: "auth/register",
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useRegisterMutation } = registerApi;
