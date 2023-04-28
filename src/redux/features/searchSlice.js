import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
    isSuccess: false,
    query: ""
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchResults: (state, action) => {
            return state = action.payload;
        },
        setSearchStatus: (state, action) => {
            return state = {
                value: [],
                isSuccess: action.payload.isSuccess,
                query: action.payload.query,
            };
        },
        resetSearch: (state, action) => {
            return state = initialState;
        },
    }
});

export const { setSearchResults, setSearchStatus, resetSearch } = searchSlice.actions;
export default searchSlice.reducer;