import { authApi } from "@/api/auth-api";
import { ApiQuery, PaginationResponse } from "@/api/dto";
import { Playlist } from "@/features/playlist/models/playlist";
import { transformStandardResponse } from "@/utils/api";

export const playlistApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    getPlaylists: build.query<Playlist[], ApiQuery>({
      query: (params) => ({ url: "/playlists", params: params }),
      transformResponse: transformStandardResponse,
    }),
    getPlaylist: build.query<Playlist, number>({
      query: (id) => `/playlists/${id}`,
      transformResponse: transformStandardResponse,
    }),
    getTopPlaylists: build.query<PaginationResponse<Playlist>, ApiQuery>({
      query: (params) => ({ url: "/playlists/top", params: params }),
      transformResponse: transformStandardResponse,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetPlaylistsQuery,
  useGetPlaylistQuery,
  useGetTopPlaylistsQuery,
} = playlistApi;
