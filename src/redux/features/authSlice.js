import { createSlice } from '@reduxjs/toolkit';

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    data: user ? user : null,
    isLoggedIn: user ? true : false
};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authUser: (state) => state.data,
        setAuthUser: (state, action) => state.data = action.payload
    }
});

export const { setAuthUser, authUser } = authSlice.actions;
export default authSlice.reducer;