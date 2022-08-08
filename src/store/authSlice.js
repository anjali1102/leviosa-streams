import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const tokenFromLocalStorage = localStorage.getItem("token");

const initialState = {
  user: {
    token: tokenFromLocalStorage,
    firstName: "",
    lastName: "",
    passType: "password",
    error: {
      usernameError: "",
      emailError: "",
      passwordError: "",
    },
  },
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
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = {
          token: action.payload.encodedToken,
          firstName: action.payload.foundUser.firstName,
          lastName: action.payload.foundUser.lastName,
        };
        localStorage.setItem("token", action.payload.encodedToken);
      })
      .addCase(loginUser.rejected, (state, action) => {
        const status = action?.payload.response.status;
        if (status === 404) {
          state.user.error.emailError = "Email not registered.";
          state.user.error.passwordError = "";
          toast.error("Email not registered.");
        } else if (status === 401) {
          state.user.error.emailError = "";
          state.user.error.passwordError = "Password didn't matched.";
          toast.error("Password didn't matched.");
        } else {
          toast.error("Some error occured at login, Try later.");
        }
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.user = {
          token: action.payload.encodedToken,
          firstName: action.payload.createdUser.firstName,
          lastName: action.payload.createdUser.lastName,
        };
        localStorage.setItem("token", action.payload.encodedToken);
      })
      .addCase(signUpUser.rejected, (state, action) => {
        toast.error("Some error occured at signup, Try later.");
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
