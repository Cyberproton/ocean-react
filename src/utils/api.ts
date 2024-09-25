import { BASE_V1_API_URL } from "@/config/domain";
import { AppState } from "@/stores/store";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getBaseQuery = () => {
  return fetchBaseQuery({
    baseUrl: BASE_V1_API_URL,
    prepareHeaders: (headers) => {
      headers.set("Access-Control-Allow-Origin", "*");
    },
  });
};

export const getAuthBaseQuery = () => {
  return fetchBaseQuery({
    baseUrl: BASE_V1_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as AppState).auth.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Access-Control-Allow-Origin", "*");
    },
  });
};

export const transformStandardResponse = (response: any) => response.data;
