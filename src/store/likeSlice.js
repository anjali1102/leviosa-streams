import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

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
        console.log("pending");
      })
      .addCase(getLikes.fulfilled, (state, action) => {
        if (action.payload) {
          console.log("getLikes fulfilled", action.payload);
          state.likes = action.payload.likes;
        }
      })
      .addCase(getLikes.rejected, (state, action) => {
        console.log("rejected");
      })

      .addCase(addToLikes.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(addToLikes.fulfilled, (state, action) => {
        console.log("addToLikes fulfilled", action.payload);
        if (action.payload) {
          state.likes = action.payload.likes;
        }
      })
      .addCase(addToLikes.rejected, (state, action) => {
        console.log("rejected");
      })
      .addCase(removeFromLikes.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(removeFromLikes.fulfilled, (state, action) => {
        if (action.payload) {
          state.likes = action.payload.likes;
          toast.success("Video removed From Likes ");
        }
      })
      .addCase(removeFromLikes.rejected, (state, action) => {
        console.log("rejected");
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
        { video:videoInfo },
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log("response addTolike", response);
      return response.data;
    } catch (error) {
      console.log("error addTolikes", error);
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
