import { getAccessToken, setAccessToken } from './../../../../utils/localStorage';
import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from './Action';


export const loginSlice = createSlice({
  name: 'account/login',
  initialState: {
    accessToken: getAccessToken(),
    isLoadding: false,
    isError: false
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoadding = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.accessToken = action.payload.result.accessToken as string;
        setAccessToken(state.accessToken);
        state.isLoadding = false;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.isError = true;
        state.isLoadding = false;
      });

  }
});

export default loginSlice.reducer;