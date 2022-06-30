import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const videoSlice = createSlice({
  name: "video",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.IDLE;
    });
    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

export default videoSlice.reducer;

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/api/videos");
      return res.data.videos;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
