// library
import { configureStore } from "@reduxjs/toolkit";
// components
import { userSlice } from "./useSlicer/user";
import { balanceSlice } from "./useSlicer/balance";
import { cookieSlice } from "./useSlicer/cookie";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    balance: balanceSlice.reducer,
    cookie: cookieSlice.reducer,
  },
});
