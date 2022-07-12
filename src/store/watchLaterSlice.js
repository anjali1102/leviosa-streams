import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES } from "./videoSlice";

const initialState = {
  watchLater: [],
  status: STATUSES.IDLE,
};

const watchLaterSlice = createSlice({
  name: "watchLater",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getwatchLater.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(getwatchLater.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        if (action.payload) {
          state.watchLater = action.payload.watchlater;
        }
      })
      .addCase(getwatchLater.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })

      .addCase(addToWatchLater.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(addToWatchLater.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        if (action.payload) {
          state.watchLater = action.payload.watchlater;
        }
      })
      .addCase(addToWatchLater.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })

      .addCase(deleteWatchLater.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(deleteWatchLater.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        if (action.payload) {
          state.watchLater = action.payload.watchlater;
        }
      })
      .addCase(deleteWatchLater.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export default watchLaterSlice.reducer;

export const getwatchLater = createAsyncThunk(
  "watchLater/getwatchLater",
  async (data, ThunkAPI) => {
    try {
      const { token } = data;
      const response = await axios.get("/api/user/watchlater", {
        headers: {
          authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const addToWatchLater = createAsyncThunk(
  "watchLater/addToWatchLater",
  async (data, ThunkAPI) => {
    try {
      const { video, token } = data;
      const response = await axios.post(
        "/api/user/watchlater",
        { video },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteWatchLater = createAsyncThunk(
  "watchLater/deleteWatchLater",
  async (data, ThunkAPI) => {
    try {
      const { videoId, token } = data;
      const response = await axios.delete(`/api/user/watchlater/${videoId}`, {
        headers: {
          authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);
