import { IInforUser } from './../../../../../backend/src/interface/interface';
import { getAccessToken, setAccessToken, setRefreshToken } from './../../../utils/localStorage';
import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, getInforUserThunk } from './Action';


export const loginSlice = createSlice({
  name: 'account/login',
  initialState: {
    accessToken: getAccessToken(),
    inforUser: null as null | IInforUser,
    isLoadding: false,
    isError: false
  },
  reducers: {
    removeInforUser: (state) => {
      state.inforUser = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoadding = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.accessToken = action.payload.data.result.accessToken as string;
        setAccessToken(state.accessToken);
        setRefreshToken(action.payload.data.result.refreshToken as string);
        state.isLoadding = false;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.isError = true;
        state.isLoadding = false;
      })
      .addCase(getInforUserThunk.fulfilled, (state, action) => {
        state.inforUser = action.payload.result.inforUser as IInforUser;
      });

  }
});

export default loginSlice.reducer;
export const { removeInforUser } = loginSlice.actions;