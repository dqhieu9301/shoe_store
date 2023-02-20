import { getAllProductThunk } from './Action';

import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from '../../../interface/interface';


export const productSlice = createSlice({
  name: 'account/login',
  initialState: {
    isLoadding: false,
    isError: false,
    listProduct: [] as IProduct[]
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductThunk.pending, (state) => {
        state.isLoadding = true;
      })
      .addCase(getAllProductThunk.fulfilled, (state, action) => {
        state.listProduct = action.payload.result.listProduct;
        state.isLoadding = false;
      })
      .addCase(getAllProductThunk.rejected, (state) => {
        state.isError = true;
        state.isLoadding = false;
      });

  }
});

export default productSlice.reducer;