import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from '../feature/login/redux/Login.reducer';
import ProductReducer from '../feature/product/redux/Product.reducer';
export const store = configureStore({
  reducer: {
    LoginReducer,
    ProductReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
