import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUSES } from "./videoSlice";

const initialState = {
  playlist: [],
  status: STATUSES.IDLE,
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPlaylist.pending, (state, action) => {
        state.status = STATUSES.IDLE;
      })
      .addCase(getAllPlaylist.fulfilled, (state, action) => {
        if (action.payload) {
          state.playlist = action.payload.playlists;
        }
      })
      .addCase(getAllPlaylist.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })

      .addCase(addNewPlaylist.pending, (state, action) => {
        state.status = STATUSES.IDLE;
      })
      .addCase(addNewPlaylist.fulfilled, (state, action) => {
        if (action.payload) {
          state.playlist = action.payload.playlists;
        }
      })
      .addCase(addNewPlaylist.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })

      .addCase(deletePlaylist.pending, (state, action) => {
        state.status = STATUSES.IDLE;
      })
      .addCase(deletePlaylist.fulfilled, (state, action) => {
        if (action.payload) {
          state.playlist = action.payload.playlists;
        }
      })
      .addCase(deletePlaylist.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })

      .addCase(addVideoToPlaylist.pending, (state, action) => {
        state.status = STATUSES.IDLE;
      })
      .addCase(addVideoToPlaylist.fulfilled, (state, action) => {
        if (action.payload) {
          const updatedPlaylists = state.playlist.map((item) => {
            if (action.payload.playlist._id === item._id) {
              return action.payload.playlist;
            } else {
              return item;
            }
          });
          state.playlist = updatedPlaylists;
        }
      })
      .addCase(addVideoToPlaylist.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })

      .addCase(removeVideoFromPlaylist.pending, (state, action) => {
        state.status = STATUSES.IDLE;
      })
      .addCase(removeVideoFromPlaylist.fulfilled, (state, action) => {
        if (action.payload) {
          const updatedRemovePlaylists = state.playlist.map((item) => {
            if (action.payload.playlist._id === item._id) {
              return action.payload.playlist;
            } else {
              return item;
            }
          });
          state.playlist = updatedRemovePlaylists;
        }
      })
      .addCase(removeVideoFromPlaylist.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export default playlistSlice.reducer;

export const getAllPlaylist = createAsyncThunk(
  "playlist/getAllPlaylist",
  async (data, thunkAPI) => {
    const { token } = data;
    try {
      const response = await axios.get("/api/user/playlists", {
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

export const addNewPlaylist = createAsyncThunk(
  "playlist/addNewPlaylist",
  async (data, thunkAPI) => {
    const { token, playlist } = data;
    try {
      const response = await axios.post(
        "/api/user/playlists",
        {
          playlist,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const deletePlaylist = createAsyncThunk(
  "playlist/deletePlaylist",
  async (data, thunkAPI) => {
    const { token, playlistId } = data;
    try {
      const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
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

export const addVideoToPlaylist = createAsyncThunk(
  "playlist/addVideoToPlaylist",
  async (data, thunkAPI) => {
    const { token, playlistId, video } = data;
    try {
      const response = await axios.post(
        `/api/user/playlists/${playlistId}`,
        {
          video,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeVideoFromPlaylist = createAsyncThunk(
  "playlist/removeVideoFromPlaylist",
  async (data, thunkAPI) => {
    const { token, playlistId, videoId } = data;
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playlistId}/${videoId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
