import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
    status: 'idle',
};

export const bannerSlice = createSlice({
    name: 'banners',
    initialState,
    reducers: {
        getBanners: (state, action) => {
            state.value = action.payload;
        },
    }
});

export const { getBanners } = bannerSlice.actions;
export default bannerSlice.reducer;