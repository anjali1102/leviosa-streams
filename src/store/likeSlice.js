import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES } from "./videoSlice";
import { toast } from "react-hot-toast";

const initialState = {
  likes: [],
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLikes.pending, (state, action) => {
        state.status = STATUSES.IDLE;
      })
      .addCase(getLikes.fulfilled, (state, action) => {
        if (action.payload) {
          state.likes = action.payload.likes;
        }
      })
      .addCase(getLikes.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })

      .addCase(addToLikes.pending, (state, action) => {
        state.status = STATUSES.IDLE;
      })
      .addCase(addToLikes.fulfilled, (state, action) => {
        if (action.payload) {
          state.likes = action.payload.likes;
          toast.success("Added to Likes 😍");
        }
      })
      .addCase(addToLikes.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(removeFromLikes.pending, (state, action) => {
        state.status = STATUSES.IDLE;
      })
      .addCase(removeFromLikes.fulfilled, (state, action) => {
        if (action.payload) {
          state.likes = action.payload.likes;
          toast.success("Removed From Likes ");
        }
      })
      .addCase(removeFromLikes.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export default likeSlice.reducer;

export const getLikes = createAsyncThunk(
  "like/getLikes",
  async (data, thunkAPI) => {
    const { token } = data;
    try {
      const response = await axios.get("/api/user/likes", {
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

export const addToLikes = createAsyncThunk(
  "like/addToLikes",
  async (data, thunkAPI) => {
    const { videoInfo, token } = data;
    try {
      const response = await axios.post(
        "/api/user/likes",
        { video: videoInfo },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeFromLikes = createAsyncThunk(
  "like/removeFromLikes",
  async (data, thunkAPI) => {
    const { videoId, token } = data;
    try {
      const response = await axios.delete(`/api/user/likes/${videoId}`, {
        headers: {
          authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
