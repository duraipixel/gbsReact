import { createSlice } from '@reduxjs/toolkit';

const user         = JSON.parse(localStorage.getItem("user"));
const user_verfied = localStorage.getItem("user_verfied");

const initialState = {
    data: user ? user : null,
    isLoggedIn: user_verfied ? true : false
};

export const authSlice = createSlice(
    {
        name: 'auth',
        initialState,
        reducers: {
            authUser: (state) => state.data,
            setAuthUser: (state, action) => state = action.payload,
        }
    }
);

export const { setAuthUser, authUser } = authSlice.actions;
export default authSlice.reducer;