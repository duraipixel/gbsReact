import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setCheckoutData: (state, action) => state = action.payload,
  },
})

export const { setCheckoutData } = checkoutSlice.actions

export default checkoutSlice.reducer