import { configureStore } from '@reduxjs/toolkit'
import cartReducer from 'redux/features/cartSlice'

export const store = configureStore({
  reducer: {
    cart : cartReducer
  },
})