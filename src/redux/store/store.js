import { configureStore } from '@reduxjs/toolkit';
import cartReducer from 'redux/features/cartSlice'
import headerReducer from 'redux/features/headerSlice';
import { bannerService } from 'redux/features/banners/bannerService';
import { navMenuService } from 'redux/features/homePage/navMenuService';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    header:headerReducer,
    [bannerService.reducerPath]: bannerService.reducer,
    [navMenuService.reducerPath]: navMenuService.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(bannerService.middleware).concat(navMenuService.middleware),
});

