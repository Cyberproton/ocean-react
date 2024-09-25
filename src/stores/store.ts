import { authApi } from "@/api/auth-api";
import { nonAuthApi } from "@/api/non-auth-api";
import { authSlice } from "@/features/auth/stores/auth-slice";
import { loginInputSlice } from "@/features/auth/stores/password-slice";
import { registerSlice } from "@/features/auth/stores/register-slice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch } from "react-redux";

export const appStore = configureStore({
  reducer: {
    auth: authSlice.reducer,
    loginInput: loginInputSlice.reducer,
    registerInput: registerSlice.reducer,
    [nonAuthApi.reducerPath]: nonAuthApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nonAuthApi.middleware, authApi.middleware),
});

setupListeners(appStore.dispatch);

export type AppState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
