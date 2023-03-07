/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../api/axios';


export const getListProductByType = createAsyncThunk(
  'product/getListProductByType',
  async ({type, page}: any, {rejectWithValue}: any) => {
    try {
      const res = await axiosInstance.get(`api/product/getProductByType?type=${type}&page=${page}`);
      return res;
    } catch (err: any) {
      rejectWithValue(err.response);
    }
  }
);

export const getProductById = createAsyncThunk(
  '/product/getProductById',
  async (productId: string, {rejectWithValue}: any) => {
    try {
      const res = await axiosInstance.get(`api/product/getProductById?productId=${productId}`);
      return res;
    } catch (err: any) {
      rejectWithValue(err.response);
    }
  }
);
