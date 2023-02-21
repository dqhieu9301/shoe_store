import { getListProductByPage, getCountProduct } from './Action';

import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from '../../../interface/interface';


export const productSlice = createSlice({
  name: 'account/login',
  initialState: {
    isLoadding: false,
    isError: false,
    listProduct: [] as IProduct[],
    countProduct: 0 as number
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getListProductByPage.pending, (state) => {
        state.isLoadding = true;
      })
      .addCase(getListProductByPage.fulfilled, (state, action) => {
        state.listProduct = action.payload.result.listProduct;
        state.isLoadding = false;
      })
      .addCase(getListProductByPage.rejected, (state) => {
        state.isError = true;
        state.isLoadding = false;
      })
      .addCase(getCountProduct.fulfilled, (state, action) => {
        state.countProduct = action.payload.result.count;
        state.isLoadding = false;
      });

  }
});

export default productSlice.reducer;