import { createSlice } from '@reduxjs/toolkit';

const customer_address = JSON.parse(localStorage.getItem("customer_address") !== undefined ? localStorage.getItem("customer_address") : "[]");
const initialState = {
    status: false,
    type: 'CREATE',
    edit_value: [],
    value: customer_address ? customer_address : [],
};

export const addressSlice = createSlice(
    {
        name: 'address',
        initialState,
        reducers: {
            status: (state) => state.status,
            setAdressForm: (state, action) => {
                return state = { ...action.payload, value: initialState.value, edit_value: action.payload?.edit_value }
            },
            addAddress: (state, action) => {
                localStorage.setItem("customer_address", JSON.stringify(action.payload?.value))
                return state = { ...action.payload, edit_value: action.payload?.edit_value }
            },
            setAddress: (state, action) => {
                localStorage.setItem("customer_address", JSON.stringify(action.payload))
                return state = {
                    status: false,
                    type: 'CREATE',
                    edit_value: [],
                    value: action.payload,
                }
            },
            removeAddress: (state, action) => {
                const removeItem = state.value.filter((item) => item.id !== action.payload);
                localStorage.setItem("customer_address", JSON.stringify(removeItem))
                return state.value = removeItem;
            }
        }
    }
);

export const {
    removeAddress,
    addAddress,
    setAdressForm,
    status,
    setAddress
} = addressSlice.actions;
export default addressSlice.reducer;