import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    video: videoReducer,
    auth: authReducer,
  },
});

export default store;
