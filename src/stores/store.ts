import { loginApi } from "@/features/auth/api/login";
import { passwordSlice } from "@/features/auth/stores/password-slice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const appStore = configureStore({
  reducer: {
    password: passwordSlice.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware),
});

export type AppState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
