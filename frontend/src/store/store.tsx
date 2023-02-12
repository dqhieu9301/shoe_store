import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from '../feature/login/redux/Login.reducer';
export const store = configureStore({
  reducer: {
    LoginReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
