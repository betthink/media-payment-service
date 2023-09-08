// cookieReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cookieData: {isLogin: false },
};

export const cookieSlice = createSlice({
  name: "cookie",
  initialState,
  reducers: {
    setCookieData: (state, action) => {
      state.cookieData = action.payload;
    },
  },
});

export const { setCookieData } = cookieSlice.actions;
// selector for token
export const selectToken = (state) => state.cookie.cookieData.token;
