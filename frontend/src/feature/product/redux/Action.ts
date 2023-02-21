import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../api/axios';


export const getListProductByPage = createAsyncThunk(
  'product/getListProduct',
  async (page: number) => {
    const res = await axiosInstance.get(`api/product/getProductByPage/${page}`);
    return res.data;
  }
);

export const getCountProduct = createAsyncThunk(
  'product/getCountProduct',
  async () => {
    const res = await axiosInstance.get('api/product/getCountProduct');
    return res.data;
  }
);
