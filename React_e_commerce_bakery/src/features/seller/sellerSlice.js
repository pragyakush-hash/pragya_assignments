import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchAllOrdersOfSeller, FetchProductsBySellerId } from "./sellerAPI";

export const getAllProductsOfSeller = createAsyncThunk(
  "seller/getAllProductsOfSeller",
  async (_, { rejectWithValue }) => {
    try {
      return await FetchProductsBySellerId();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAllOrderOFSeller = createAsyncThunk(
  "seller/getAllOrderOFSeller",
  async (_, { rejectWithValue }) => {
    try {
      return await FetchAllOrdersOfSeller();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const sellerSlice = createSlice({
  name: "seller",
  initialState: {
    products: [],
    orders: [],
    isLoading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      // GET ALL PRODUCTS
      .addCase(getAllProductsOfSeller.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProductsOfSeller.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getAllProductsOfSeller.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // GET PRODUCT BY ID
      .addCase(getAllOrderOFSeller.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrderOFSeller.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(getAllOrderOFSeller.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const sellerSelector = (state) => state.seller;
export default sellerSlice.reducer;
