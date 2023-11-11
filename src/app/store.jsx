// library
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// components
import balanceSlice from "./features/balance/balance-slice";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import userSlicer from "./features/user/user-slice";
// save in local storage
const persistConfig = {
  key: "root",
  version: 1,
  storage: storage,
  // whitelist: ["tokenAPI"],
};
const reducerCombine = combineReducers({
  // users: usersSlice.reducer,
  // user: userSlic.reducer,
  balance: balanceSlice.reducer,
});

export const store = configureStore({
  reducer: {
    reducerCombine,
    user: userSlicer.reducer,
    balance: balanceSlice.reducer,
  },
});

export const persistor = persistStore(store);
