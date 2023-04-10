import { configureStore } from '@reduxjs/toolkit';
import cartReducer from 'redux/features/cartSlice'
import { bannerService } from 'redux/features/banners/bannerService';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [bannerService.reducerPath]: bannerService.reducer
  }, 
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware({
    serializableCheck: false
  }).concat(bannerService.middleware),
});

