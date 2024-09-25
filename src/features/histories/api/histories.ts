import { authApi } from "@/api/auth-api";
import { PaginationResponse } from "@/api/dto";
import { History, HistoryQuery } from "@/features/histories/models/history";
import { transformStandardResponse } from "@/utils/api";

export const historiesApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    getHistories: build.query<PaginationResponse<History>, HistoryQuery>({
      query: (arg) => ({
        url: "/histories",
        method: "GET",
        params: arg,
      }),
      transformResponse: transformStandardResponse,
    }),
  }),
  overrideExisting: false,
});

export const { useGetHistoriesQuery } = historiesApi;
