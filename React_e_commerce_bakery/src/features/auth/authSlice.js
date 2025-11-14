import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signupUser, emailVerificationFetch } from "./authAPI";

export const emailVerification = createAsyncThunk(
  "user/emailVerification",
  async (emailVerify, { rejectWithValue }) => {
    try {
      const response = await emailVerificationFetch(emailVerify);
      console.log(response, "otp response");
      return response;
    } catch (error) {
        console.log(error,"error otp")
      return rejectWithValue(error);
    }
  }
);
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await signupUser(userData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
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
      });
  },
});

export const userSelector = (state) => state.user;
export default authSlice.reducer;
