import { createSlice } from '@reduxjs/toolkit';
 
const initialState = "";

export const filterSlice = createSlice(
    {
        name: 'filter',
        initialState,
        reducers: {
            setfilter: (state, action) => state = action.payload,
        }
    }
);

export const { setfilter } = filterSlice.actions;
export default filterSlice.reducer;