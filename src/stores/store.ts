import { loginApi } from "@/features/auth/api/login";
import { loginInputSlice } from "@/features/auth/stores/password-slice";
import { registerSlice } from "@/features/auth/stores/register-slice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const appStore = configureStore({
  reducer: {
    loginInput: loginInputSlice.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    register: registerSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware),
});

export type AppState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
