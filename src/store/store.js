import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";
import authReducer from "./authSlice";
import likeReducer from "./likeSlice";
import historyReducer from "./historySlice";
import watchLaterReducer from "./watchLaterSlice";

const store = configureStore({
  reducer: {
    video: videoReducer,
    auth: authReducer,
    like: likeReducer,
    history: historyReducer,
    watchLater: watchLaterReducer,
  },
});

export default store;
