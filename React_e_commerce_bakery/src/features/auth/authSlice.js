import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signupUser, emailVerificationFetch, loginUserFetch } from "./authAPI";

export const emailVerification = createAsyncThunk(
  "user/emailVerification",
  async (emailVerify, { rejectWithValue }) => {
    try {
      const response = await emailVerificationFetch(emailVerify);
      console.log(response, "otp response");
      return response;
    } catch (error) {
      console.log(error, "error otp");
      return rejectWithValue(error);
    }
  }
);
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await signupUser(formData);
      return response;
    } catch (error) {
      console.log(error, "error register");

      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await loginUserFetch(loginData);
      console.log(response.data.token, "response for login");
      localStorage.setItem("userToken", response.data.token);

      return response.data;
    } catch (error) {
      console.log(error, "error login");
      return rejectWithValue(error);
    }
  }
);

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  user: null,
  isAuthenticated: userToken ? true : false,
  userToken,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //registration
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Email verification
      .addCase(emailVerification.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(emailVerification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(emailVerification.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.userToken = action.payload.userToken;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const userSelector = (state) => state.auth;
export default authSlice.reducer;
