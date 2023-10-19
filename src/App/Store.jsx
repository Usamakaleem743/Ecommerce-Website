import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../Features/Slices/productsSlice';
import cartReducer from '../Features/Slices/cartSlice';
import authReducer from '../Features/Slices/authSlice';
export const store=configureStore({
  reducer:{
    products:productsReducer,
    cart:cartReducer,
    auth:authReducer
  }
})