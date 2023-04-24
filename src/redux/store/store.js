import { configureStore } from '@reduxjs/toolkit';
import cartReducer from 'redux/features/cartSlice'
import searchReducer from 'redux/features/searchSlice'
import headerReducer from 'redux/features/headerSlice';
import { bannerService } from 'redux/features/banners/bannerService';
import { navMenuService } from 'redux/features/homePage/navMenuService';
import authReducer from 'redux/features/authSlice'
import authLayoutReducer from 'redux/features/authLayoutSlice';
import compareSlice from 'redux/features/compareSlice';
import addressSlice from 'redux/features/addressSlice';
import checkOutSlice from 'redux/features/checkOutSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    address: addressSlice,
    compareProducts: compareSlice,
    authLayout: authLayoutReducer,
    cart: cartReducer,
    checkout: checkOutSlice,
    search: searchReducer,
    header: headerReducer,
    [bannerService.reducerPath]: bannerService.reducer,
    [navMenuService.reducerPath]: navMenuService.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(bannerService.middleware).concat(navMenuService.middleware),
});

