import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

export const authLayoutSlice = createSlice(
    {
        name: 'auth',
        initialState,
        reducers: {
            layoutStatus: (state) => state,
            setLayoutStatus: (state, action) => state = action.payload,
        }
    }
);

export const { setLayoutStatus, layoutStatus } = authLayoutSlice.actions;
export default authLayoutSlice.reducer;