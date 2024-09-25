import { getBaseQuery } from "@/utils/api";
import { createApi } from "@reduxjs/toolkit/query/react";

export const nonAuthApi = createApi({
  reducerPath: "nonAuthApi",
  baseQuery: getBaseQuery(),
  endpoints: () => ({}),
  tagTypes: [],
});
