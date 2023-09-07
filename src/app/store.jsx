// library
import { configureStore } from "@reduxjs/toolkit";
// components
import { userSlice } from "./useSlicer/user";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
