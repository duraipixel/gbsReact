import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: false,
    type: 'login'
};

export const authLayoutSlice = createSlice(
    {
        name: 'auth',
        initialState,
        reducers: {
            layoutStatus: (state) => state,
            setLayoutStatus: (state, action) => {
                return state = action.payload
            },
        }
    }
);

export const { setLayoutStatus, layoutStatus } = authLayoutSlice.actions;
export default authLayoutSlice.reducer;