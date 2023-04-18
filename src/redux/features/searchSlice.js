import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
    status: 'idle',
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchResults: (state, action) => {
            state.value = action.payload;
        },
    } 
});

export const { setSearchResults } = searchSlice.actions;
export default searchSlice.reducer;