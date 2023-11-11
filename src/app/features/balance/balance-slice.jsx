import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tokenLocal } from "../../../global/token";
import { axiosInstance } from "../../../utils/axiosInstance";

// variables
const initialState = {
  balance: 0,
  isSuccess: false,
  isLoading: false,
};
// functions
// export const getBalance = createAsyncThunk(
//   "balance/getBalance",
//   async (arg, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.get("/balance", {
//         headers: {
//           Authorization: `Bearer ${tokenLocal}`,
//         },
//       });
//       console.log(response);
//       const { status, data } = response;
//       if (status === 200) {
//         return data.data.balance;
//       } else {
//         rejectWithValue("failed request");
//       }
//     } catch (error) {
//       console.log(error);
//       throw error; // tambahkan ini agar promise tetap ditolak
//     }
//   }
// );

// actions
export const setBalance = createAction("balance/setBalance");
const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setBalance, (state, action) => {
      state.balance = action.payload.balance;
      state.isSuccess = action.payload.isSuccess;
    });
  },
});

export default balanceSlice;
