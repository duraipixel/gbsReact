import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

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
                var products = JSON.parse(localStorage.getItem('compare_products'))
                return state = {
                    status: action.payload.status,
                    value: products
                }
            },
            addProduct: (state, action) => {
                if (localStorage.getItem('compare_products') === undefined || localStorage.getItem('compare_products') === null) {
                    localStorage.setItem('compare_products', JSON.stringify([]));
                }
                if (localStorage.getItem('compare_products') !== undefined || localStorage.getItem('compare_products') !== null) {
                    let currentList = JSON.parse(localStorage.getItem('compare_products'));
                    if (currentList.length < 3) {
                        if (currentList.length === 0) {
                            localStorage.setItem('compare_products', JSON.stringify([...currentList, action.payload.value]))
                        } else {
                            var filters = currentList.filter(item => item.id !== action.payload.value.id)
                            localStorage.setItem('compare_products', JSON.stringify([...filters, action.payload.value]));
                        }
                    } else {
                        toast.error("You can add maximum 3 items to compare.")
                    }
                }
                var products = JSON.parse(localStorage.getItem('compare_products'))
                return state = {
                    status: true,
                    value: products
                }
            },
            removeProduct: (state, action) => {
                let currentList = JSON.parse(localStorage.getItem('compare_products'));
                const removeItem = currentList.filter((item) => item.id !== action.payload.value);
                localStorage.setItem('compare_products', JSON.stringify(removeItem));
                return state = {
                    status: action.payload.status,
                    value: removeItem
                }
            },
            clearProduct: (state) => {
                localStorage.setItem('compare_products', JSON.stringify([]));
                return state = {
                    status: false,
                    value: []
                }
            }
        }
    }
);

export const { addProduct, removeProduct, clearProduct, setCompareStatus } = compareSlice.actions;
export default compareSlice.reducer;