import { BASE_V1_API_URL } from "@/config/domain";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
  reducerPath: "login",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_V1_API_URL,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }),
  tagTypes: ["loginInput"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: { email: string; password: string }) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["loginInput"],
    }),
  }),
});

export const { useLoginMutation } = loginApi;
