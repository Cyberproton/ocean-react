import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  retypedPassword: "",
  showPassword: false,
};

export const registerSlice = createSlice({
  name: "register",
  initialState: initialState,
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    updateRetypedPassword: (state, action) => {
      state.retypedPassword = action.payload;
    },
    toggleShowPassword: (state) => {
      state.showPassword = !state.showPassword;
    },
  },
});
