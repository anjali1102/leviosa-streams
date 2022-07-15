import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";
import authReducer from "./authSlice";
import likeReducer from "./likeSlice";
import historyReducer from "./historySlice";
import watchLaterReducer from "./watchLaterSlice";
import playlistReducer from "./playlistSlice";

const store = configureStore({
  reducer: {
    video: videoReducer,
    auth: authReducer,
    like: likeReducer,
    history: historyReducer,
    watchLater: watchLaterReducer,
    playlist: playlistReducer,
  },
});

export default store;
