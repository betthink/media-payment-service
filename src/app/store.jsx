// library
import { configureStore } from "@reduxjs/toolkit";
// components
import { userSlice } from "./useSlicer/user";
import { balanceSlice } from "./useSlicer/balance";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    balance: balanceSlice.reducer
  },
});
