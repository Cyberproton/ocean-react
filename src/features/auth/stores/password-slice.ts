import { createSlice } from "@reduxjs/toolkit";

export const passwordSlice = createSlice({
  name: "password",
  initialState: {
    value: "",
    showPassword: false,
  },
  reducers: {
    updatePassword: (state, action) => {
      state.value = action.payload;
    },
    toggleShowPassword: (state) => {
      state.showPassword = !state.showPassword;
    },
  },
});
