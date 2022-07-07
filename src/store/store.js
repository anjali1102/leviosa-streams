import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";
import authReducer from "./authSlice";
import likeReducer from "./likeSlice";

const store = configureStore({
  reducer: {
    video: videoReducer,
    auth: authReducer,
    like: likeReducer,
  },
});

export default store;
