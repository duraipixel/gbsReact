import { createSlice } from '@reduxjs/toolkit';

var   customer_address = JSON.parse(localStorage.getItem("customer_address"))
const shipping_address = JSON.parse(localStorage.getItem("shipping_address"));
const billing_address  = JSON.parse(localStorage.getItem("billing_address"));

if (customer_address !== null && shipping_address === null) {
    localStorage.setItem("shipping_address", JSON.stringify(customer_address[0]))
}

if (customer_address !== null && shipping_address === null) {
    localStorage.setItem("billing_address", JSON.stringify(customer_address[0]))
}

const initialState = {
    shipping_address: shipping_address ? shipping_address : null,
    billing_address: billing_address ? billing_address : null,
};

export const cartAddressSlice = createSlice(
    {
        name: 'cartAddress',
        initialState,
        reducers: {
            status: (state) => state.status,
            setShippingAddress: (state, action) => {
                localStorage.setItem("shipping_address", JSON.stringify(action.payload))
                return state = {
                    shipping_address: JSON.parse(localStorage.getItem("shipping_address")),
                    billing_address: initialState.billing_address
                }
            },
            setBillingAddress: (state, action) => {
                localStorage.setItem("billing_address", JSON.stringify(action.payload))
                return state = {
                    billing_address: JSON.parse(localStorage.getItem("billing_address")),
                    shipping_address: initialState.shipping_address
                }
            },
        }
    }
);

export const {
    setShippingAddress,
    setBillingAddress
} = cartAddressSlice.actions;
export default cartAddressSlice.reducer;