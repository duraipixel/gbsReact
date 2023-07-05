import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getBannersAsync = createAsyncThunk('banners/fetchBanners', async () => {
    const response = await fetch('https://admin.anandlab.com/public/api/banners');
    const result = await response.json();
    // console.log(result.data)
    return {
        value: result.data,
        status: 'idle',
    };
});

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
    },
    extraReducers: (builder) => {
        builder.addCase(getBannersAsync.pending, (state) => {
            state.status = 'loading';
        }).addCase(getBannersAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.value += action.payload;
        });
    },
});

export const { getBanners } = bannerSlice.actions;
export default bannerSlice.reducer;