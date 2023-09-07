// library
import { createSlice } from '@reduxjs/toolkit';
// components 
export const balanceSlice = createSlice({
  name: 'balance',
  initialState: {
    dataBalance: 0,
  },
  reducers: {
    setDataBalance: (state, action) => {
      state.dataBalance = action.payload;
    },
  },
});

export const { setDataBalance } = balanceSlice.actions;