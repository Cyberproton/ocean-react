export type ApiQuery = {
  limit?: number;
  offset?: number;
};

export type PaginationResponse<T> = {
  items: T[];
  limit: number;
  offset: number;
  total: number;
  next?: string;
  previous?: string;
};

export type ApiQueryOrNullOrUndefined = ApiQuery | null | undefined;
