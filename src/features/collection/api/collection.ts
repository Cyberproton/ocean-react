import { authApi } from "@/api/auth-api";
import { ApiQuery, PaginationResponse } from "@/api/dto";
import {
  CollectionItem,
  CollectionItemSort,
  CollectionItemType,
} from "@/features/collection/models/collection";
import { transformStandardResponse } from "@/utils/api";

export type CollectionQueryApi = ApiQuery & {
  types?: CollectionItemType[];
  sort?: CollectionItemSort;
};

export const collectionApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    getMyCollection: build.query<
      PaginationResponse<CollectionItem>,
      CollectionQueryApi | null | undefined
    >({
      query: (params) => ({ url: `/users/me/collection`, params: params }),
      transformResponse: transformStandardResponse,
    }),
    checkAlbumsInCollection: build.query<boolean[], number[]>({
      query: (ids) => ({
        url: `/users/me/albums/saved/contains`,
        params: { ids },
      }),
      transformResponse: transformStandardResponse,
    }),
  }),
  overrideExisting: false,
});

export const { useGetMyCollectionQuery } = collectionApi;
