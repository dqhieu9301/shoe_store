import { getProductById } from './Action';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getListProductByType } from './Action';

import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from '../../../interface/interface';


export const productSlice = createSlice({
  name: 'account/login',
  initialState: {
    isLoadding: false,
    isError: false,
    listProduct: [] as IProduct[],
    product: null as null | IProduct,
    countProduct: 0 as number
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getListProductByType.pending, (state) => {
        state.isLoadding = true;
      })
      .addCase(getListProductByType.fulfilled, (state, action: any) => {
        state.listProduct = action.payload.data.result.listProduct;
        state.countProduct = action.payload.data.result.size;
        state.isLoadding = false;
      })
      .addCase(getListProductByType.rejected, (state) => {
        state.isError = true;
        state.isLoadding = false;
      })
      .addCase(getProductById.fulfilled, (state, action: any) => {
        state.isLoadding = false;
        state.product = action.payload.data.result.product;
      });

  }
});

export default productSlice.reducer;