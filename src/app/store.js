import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slice/appSlice";
export const store = configureStore({
  reducer: {
    app: appSlice,
  },
});
