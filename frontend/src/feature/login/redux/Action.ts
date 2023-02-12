import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../api/axios";
import { ILoginForm } from "../interface";

export const loginThunk = createAsyncThunk(
  '/account/login',
  async ({ username, password}: ILoginForm) => {
    const res = await axiosInstance.post('/api/account/login', {
      username: username,
      password: password
    });
    return res.data.result;
  }
);