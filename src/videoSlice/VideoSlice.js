import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchVideos = createAsyncThunk(
  "video/fetchVideos",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/api/videos");
      console.log(res.data.videos);
      return res.data.videos;
    } catch {
      const data = "Try Again";
      return data;
    }
  }
);

export const videoSlice = createSlice({
  name: "video",
  initialState: {
    video: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchVideos.pending]: (state) => {
      state.loading = true;
    },
    [fetchVideos.fulfilled]: (state, action) => {
      debugger;
      state.video = action.payload;
      state.loading = false;
    },
    [fetchVideos.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const {} = videoSlice.actions;

export default videoSlice.reducer;
