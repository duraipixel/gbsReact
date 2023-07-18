import { createSlice } from '@reduxjs/toolkit';

const customer_address = JSON.parse(localStorage.getItem("customer_address"))
const shipping_address = JSON.parse(localStorage.getItem("shipping_address"));
const billing_address = JSON.parse(localStorage.getItem("billing_address"));
const store_address = JSON.parse(localStorage.getItem("store_address"));

if (customer_address !== null && shipping_address === null) {
    if (customer_address.length !== 0) {
        localStorage.setItem("shipping_address", JSON.stringify(customer_address[0]))
    }
}

if (customer_address !== null && billing_address === null) {
    if (customer_address.length !== 0) {
        localStorage.setItem("billing_address", JSON.stringify(customer_address[0]))
    }
}

const initialState = {
    shipping_address: shipping_address ? shipping_address : null,
    billing_address: billing_address ? billing_address : null,
    store_address: store_address ? store_address : null,
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
                    shipping_address: action.payload,
                    billing_address: JSON.parse(localStorage.getItem("billing_address")),
                    store_address: JSON.parse(localStorage.getItem("store_address"))
                }
            },
            setBillingAddress: (state, action) => {
                localStorage.setItem("billing_address", JSON.stringify(action.payload))
                return state = {
                    billing_address: action.payload,
                    shipping_address: JSON.parse(localStorage.getItem("shipping_address")),
                    store_address: JSON.parse(localStorage.getItem("store_address"))
                }
            },
            setStoreAddress: (state, action) => {
                localStorage.setItem("store_address", JSON.stringify(action.payload))
                return state = {
                    billing_address: JSON.parse(localStorage.getItem("billing_address")),
                    shipping_address: JSON.parse(localStorage.getItem("shipping_address")),
                    store_address: action.payload
                }
            },
            clearShippingAddress: (state, action) => {
                return state = {
                    shipping_address: null,
                    billing_address: JSON.parse(localStorage.getItem("billing_address")),
                    store_address: JSON.parse(localStorage.getItem("store_address"))
                }
            },
            clearBillingAddress: (state, action) => {
                return state = {
                    billing_address: null,
                    shipping_address: JSON.parse(localStorage.getItem("shipping_address")),
                    store_address: JSON.parse(localStorage.getItem("store_address"))
                }
            },
        }
    }
);

export const {
    setShippingAddress,
    setBillingAddress,
    setStoreAddress,
    clearBillingAddress,
    clearShippingAddress
} = cartAddressSlice.actions;
export default cartAddressSlice.reducer;