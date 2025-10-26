import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMoviesData } from "./movieApi";

// async thunk for fetching movie data

export const fetchMovies = createAsyncThunk(
  "movie/fetchMovies",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchMoviesData();
      localStorage.setItem("movies", JSON.stringify(data.results));
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: false,
  movies: [],
  error: null,
};
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch movies";
      });
  },
});
export const {} = movieSlice.actions;
export default movieSlice.reducer;
