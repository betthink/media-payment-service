// library
import { createSlice } from "@reduxjs/toolkit";
// components

// variables
const initialState = {
  value: { email: "", password: "", token: "", isLoggin: false },
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { login, logout } = userSlice.actions;
