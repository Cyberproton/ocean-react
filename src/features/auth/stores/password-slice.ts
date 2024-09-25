import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  showPassword: false,
};

export const loginInputSlice = createSlice({
  name: "loginInput",
  initialState: initialState,
  reducers: {
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    toggleShowPassword: (state) => {
      state.showPassword = !state.showPassword;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    reset: () => initialState,
  },
});
