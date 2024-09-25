import { loginApi } from "@/features/auth/api/login";
import {
  clearAuthCredentialFromLocalStorage,
  getAuthCredentialFromLocalStorage,
  saveAuthCredentialToLocalStorage,
} from "@/features/auth/functions/save-login-credentials";
import { User } from "@/features/auth/model/User";
import { requireNonNullish } from "@/utils/type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type AuthState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: getAuthCredentialFromLocalStorage(),
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        user: User;
        accessToken: string;
        refreshToken: string;
      }>
    ) => {
      saveAuthCredentialToLocalStorage(action.payload);
      return {
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isAuthenticated: true,
      };
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      saveAuthCredentialToLocalStorage({
        user: action.payload,
        accessToken: requireNonNullish(state.accessToken),
        refreshToken: requireNonNullish(state.refreshToken),
      });
    },
    setTokens: (
      state,
      action: PayloadAction<{
        accessToken: string;
        refreshToken: string;
      }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
      saveAuthCredentialToLocalStorage({
        user: requireNonNullish(state.user),
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      });
    },
    clearCredentials: () => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(loginApi.endpoints.login.matchFulfilled, (state, action) => {
        const user = requireNonNullish(action.payload.user);
        const accessToken = requireNonNullish(action.payload.accessToken);
        const refreshToken = requireNonNullish(action.payload.refreshToken);

        saveAuthCredentialToLocalStorage({
          user: user,
          accessToken: accessToken,
          refreshToken: refreshToken,
        });
        return {
          user: user,
          accessToken: accessToken,
          refreshToken: refreshToken,
          isAuthenticated: true,
        };
      })
      .addMatcher(authSlice.actions.clearCredentials.match, () => {
        clearAuthCredentialFromLocalStorage();
      });
  },
});

export const selectAuth = (state: { auth: AuthState }) => state.auth;

export const { setCredentials, setUser, setTokens, clearCredentials } =
  authSlice.actions;
