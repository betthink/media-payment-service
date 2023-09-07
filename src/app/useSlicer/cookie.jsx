// cookieReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cookieData: { token: "" },
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
export default cookieSlice.reducer;
// selector for token
export const selectToken = (state) => state.cookie.cookieData.token;
