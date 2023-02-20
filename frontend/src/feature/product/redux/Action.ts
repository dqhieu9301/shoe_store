import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../api/axios';


export const getAllProductThunk = createAsyncThunk(
  'product/getAll',
  async () => {
    const res = await axiosInstance.get('api/product/getAllProduct');
    return res.data;
  }
);