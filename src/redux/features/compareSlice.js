import { createSlice } from '@reduxjs/toolkit';

const compare_products = JSON.parse(localStorage.getItem("compare_products"));

const initialState = {
    status: false,
    value: compare_products ? compare_products : [],
};

export const compareSlice = createSlice(
    {
        name: 'compare',
        initialState,
        reducers: {
            status: (state) => state.status,
            setCompareStatus: (state, action) => {
                return state = action.payload
            },
            addProduct: (state, action) => {
                return state += action.payload
            },
            removeProduct: (state, action) => {
                const removeItem   = state.value.filter((item) => item.id !== action.payload);
                return state.value = removeItem;
            },
            clearProduct: (state) => {
                return state.value = []
            }
        }
    }
);

export const { addProduct, removeProduct, clearProduct, setCompareStatus } = compareSlice.actions;
export default compareSlice.reducer;