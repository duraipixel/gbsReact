import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: false,
}

export const headerSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setHeader: (state, action) => {
      return state = action.payload
    }
  },
})

export const { setHeader } = headerSlice.actions

export default headerSlice.reducer