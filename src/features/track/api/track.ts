import { authApi } from "@/api/auth-api";
import { ApiQuery, PaginationResponse } from "@/api/dto";
import { Track } from "@/features/track/models/track";
import { transformStandardResponse } from "@/utils/api";

export const trackApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    getTracks: build.query<Track[], ApiQuery>({
      query: (params) => ({ url: "/tracks", params: params }),
      transformResponse: transformStandardResponse,
    }),
    getTrack: build.query<Track, number>({
      query: (id) => `/tracks/${id}`,
      transformResponse: transformStandardResponse,
    }),
    getTopTracks: build.query<PaginationResponse<Track>, ApiQuery>({
      query: (params) => ({ url: "/tracks/top", params: params }),
      transformResponse: transformStandardResponse,
    }),
  }),
  overrideExisting: false,
});

export const { useGetTracksQuery, useGetTrackQuery, useGetTopTracksQuery } =
  trackApi;
