import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const tokenFromLocalStorage = localStorage.getItem("token");

const initialState = {
  user: { token: tokenFromLocalStorage, firstName: "", lastName: "" },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.user = { token: null };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        console.info("pending");
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = {
          token: action.payload.encodedToken,
          firstName: action.payload.foundUser.firstName,
          lastName: action.payload.foundUser.lastName,
        };
        localStorage.setItem("token", action.payload.encodedToken);
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.info(action.payload.message);
      })

      .addCase(signUpUser.pending, (state, action) => {
        console.info("pending");
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user = {
          token: action.payload.encodedToken,
          firstName: action.payload.createdUser.firstName,
          lastName: action.payload.createdUser.lastName,
        };
      })
      .addCase(signUpUser.rejected, (state, action) => {
        console.info("error");
      });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, thunkAPI) => {
    try {
      const { email, password } = data;
      const res = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (data, thunkAPI) => {
    try {
      const { firstName, lastName, email, password, navigate } = data;
      const response = await axios.post("/api/auth/signup", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      navigate("/");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
