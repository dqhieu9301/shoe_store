
import { axiosInstance } from './../../../api/axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginForm } from "../interface";

export const loginThunk = createAsyncThunk(
  '/account/login',
  async ({ username, password}: ILoginForm) => {
    const res = await axiosInstance.post('/api/auth/login', {
      username: username,
      password: password
    });
    return res.data;
  }
);
