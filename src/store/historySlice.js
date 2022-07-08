import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES } from "./videoSlice";

const initialState = {
  histories: [],
  status: STATUSES.IDLE,
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHistory.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(getHistory.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        if (action.payload) {
          state.histories = action.payload.history;
        }
      })
      .addCase(getHistory.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(addToHistory.pending, (state, action) => {
        state.status = STATUSES.pending;
      })
      .addCase(addToHistory.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        if (action.payload) {
          state.histories = action.payload.history;
        }
      })
      .addCase(addToHistory.rejected, (state, action) => {
        state.status = STATUSES.rejected;
      })
      .addCase(removeFromHistory.pending, (state, action) => {
        state.status = STATUSES.pending;
      })
      .addCase(removeFromHistory.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        if (action.payload) {
          state.histories = action.payload.history;
        }
      })
      .addCase(removeFromHistory.rejected, (state, action) => {
        state.status = STATUSES.rejected;
      })
      .addCase(clearAllHistory.pending, (state, action) => {
        state.status = STATUSES.pending;
      })
      .addCase(clearAllHistory.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        if (action.payload) {
          state.histories = action.payload.history;
        }
      })
      .addCase(clearAllHistory.rejected, (state, action) => {
        state.status = STATUSES.error;
      });
  },
});

export default historySlice.reducer;

export const getHistory = createAsyncThunk(
  "history/getHistory",
  async (data, thunkAPI) => {
    const { token } = data;
    try {
      const response = await axios.get("/api/user/history", {
        headers: {
          authorization: token,
        },
      });
      console.log("gethistory fulfilled", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addToHistory = createAsyncThunk(
  "history/addToHistory",
  async (data, thunkAPI) => {
    const { video, token } = data;
    try {
      const response = await axios.post(
        "/api/user/history",
        { video },
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeFromHistory = createAsyncThunk(
  "history/removeFromHistory",
  async (data, thunkAPI) => {
    const { videoId, token } = data;
    try {
      const response = await axios.delete(`/api/user/history/${videoId}`, {
        headers: {
          authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const clearAllHistory = createAsyncThunk(
  "history/clearAllHistory",

  async (data, thunkAPI) => {
    const { token } = data;
    try {
      const response = await axios.delete("/api/user/history/all", {
        headers: {
          authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
