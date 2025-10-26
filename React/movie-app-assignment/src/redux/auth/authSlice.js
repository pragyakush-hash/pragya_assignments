import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      const newUser = action.payload;
      console.log("newUser", newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      state.user = newUser;
    },
    login: (state, action) => { 
      const { username, password } = action.payload;
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser.username === username &&
        storedUser.password === password
      ) {
        state.user = storedUser;
        state.isAuthenticated = true;
        localStorage.setItem("user", JSON.stringify(storedUser));
      } else {
        alert("invalid credential");
        state.isAuthenticated = false;
      }
    },
  },
});

export const { signup, login } = authSlice.actions;
export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
