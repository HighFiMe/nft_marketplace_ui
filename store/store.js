import { configureStore, ThunkAction, Action, getDefaultMiddleware } from "@reduxjs/toolkit";


import web3Reducer from "./slices/web3Slice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
});

const store = configureStore({
  reducer: {
    web3Reducer: web3Reducer,
  },
  middleware: customizedMiddleware
});

export default store;
