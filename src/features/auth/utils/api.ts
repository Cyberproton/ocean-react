import { User } from "@/features/auth/model/User";
import { setCredentials } from "@/features/auth/stores/auth-slice";
import { AppState } from "@/stores/store";
import { getAuthBaseQuery, getBaseQuery } from "@/utils/api";
import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import * as jose from "jose";

export const getAuthBaseQueryWithAutoRefresh =
  (): BaseQueryFn => async (args, api, extraOptions) => {
    const rawBaseQuery = getBaseQuery();
    const authBaseQuery = getAuthBaseQuery();

    const { dispatch, getState } = api;
    const state = getState() as AppState;

    // Refresh token function
    const refreshToken = async () => {
      const refreshResponse = await rawBaseQuery(
        {
          url: "/auth/refresh-token",
          method: "POST",
          body: { refreshToken: state.auth.refreshToken },
        },
        api,
        extraOptions
      );

      if (refreshResponse.error) {
        throw new Error("Can not refresh token");
      }

      const data = (
        refreshResponse.data as {
          data: { accessToken: string; refreshToken: string; user: User };
        }
      ).data;

      dispatch(
        setCredentials({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          user: data.user,
        })
      );
    };

    // Check if token is expired
    const accessToken = state.auth.accessToken;
    const decoded = accessToken ? jose.decodeJwt(accessToken) : null;
    if (
      decoded == null ||
      decoded.exp == null ||
      decoded.exp * 1000 < Date.now()
    ) {
      try {
        await refreshToken();
      } catch (error) {
        return {
          error: {
            status: 401,
            data: null,
            error: "Can not refresh token",
          },
        };
      }
    }

    const res = await authBaseQuery(args, api, extraOptions);

    if (res.error && res.error.status === 401) {
      try {
        await refreshToken();
      } catch (error) {
        return {
          error: {
            status: 401,
            data: null,
            error: "Can not refresh token",
          },
        };
      }
      return authBaseQuery(args, api, extraOptions);
    }

    return res;
  };
