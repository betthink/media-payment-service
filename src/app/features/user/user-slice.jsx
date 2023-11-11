// lib
import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../utils/axiosInstance";
import { tokenLocal } from "../../../global/token";
// comps

// vars
// funcs
// export const getUserProfile = createAsyncThunk(
//   "user/getUserProfile",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.get("/profile", {
//         headers: {
//           Authorization: `Bearer ${tokenLocal}`,
//         },
//       });
//       const { status, data } = response;
//       if (status === 200) {
//         return data.data;
//       } else {
//         return rejectWithValue("failed request");
//       }
//     } catch (error) {
//       throw error;
//     }
//   }
// );
export const setIsLogin = createAction("isLoading/setIsLoggin");
export const setDataUser = createAction("dataUser/setIsLoggin");
const userSlicer = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    isLoggin: false,
    email: "",
    firstName: "",
    lastName: "",
  },
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(setIsLogin, (state, action) => {
      state.isLoggin = action.payload;
    });
    builder.addCase(setDataUser, (state, action) => {
      state.isLoggin = action.payload.isLoggin;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    });
  },
});

export default userSlicer;
