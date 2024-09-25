import { authApi } from "@/api/auth-api";
import { ApiQuery, PaginationResponse } from "@/api/dto";
import { Album } from "@/features/album/models/album";
import { transformStandardResponse } from "@/utils/api";

export const albumApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    getAlbums: build.query<Album[], ApiQuery>({
      query: (params) => ({ url: "/albums", params: params }),
      transformResponse: transformStandardResponse,
    }),
    getTrack: build.query<Album, number>({
      query: (id) => `/albums/${id}`,
      transformResponse: transformStandardResponse,
    }),
    getTopAlbums: build.query<PaginationResponse<Album>, ApiQuery>({
      query: (params) => ({ url: "/albums/top", params: params }),
      transformResponse: transformStandardResponse,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAlbumsQuery, useGetTrackQuery, useGetTopAlbumsQuery } =
  albumApi;
