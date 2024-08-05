import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slice/appSlice";
import chatSlice from "./slice/chatSlice";
import searchSlice from "./slice/searchSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
