import axios from "axios";
import { AuthUser } from "utils";

export const CheckProductAvailabilityApi = async (data) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/check/product/availability`, data);
}
export const productReviewApi = async (data) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/list/customer/reviews`, data);
}
export const addToCartApi = async (data) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/add/cart`, data);
}
export const removeFromCartApi = async (data) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/delete/cart`, data);
}
export const cartListApi = async () => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/get/cart`, {
        customer_id: AuthUser()?.id,
        guest_token: AuthUser() === false ? localStorage.getItem('guest_token') : "",
    });
}
export const shippingChargesApi = async (amount) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/get/shipping/charges`, {
        customer_id: AuthUser()?.id,
        amount: amount,
    });
}
export const updateCartApi = async (data) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/update/cart`, data);
}
export const clearCartList = async () => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/clear/cart`, {
        customer_id: AuthUser()?.id,
        guest_token: AuthUser() === false ? localStorage.getItem('guest_token') : "",
    });
}
export const addOrRemoveWhishListApi = async (data) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/add/remove/whishlist`, {
        customer_id: AuthUser()?.id,
        product_id: data.product_id,
        status: data.status,
    });
}
export const getWhishListApi = async () => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/get/whishlist`, {
        customer_id: AuthUser()?.id,
    });
}

export const clearWhishListApi = async () => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/clear/whishlist`, {
        customer_id: AuthUser()?.id,
    });
}
export const setShippingChargesApi = async (shipping_fee_id) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/set/shipping/charges`, {
        customer_id: AuthUser()?.id,
        shipping_fee_id: shipping_fee_id,
        coupon_amount: localStorage.getItem('coupon_amount')
    });
}

export const checkoutApi = async (data) => {
    console.log({
        customer_id: AuthUser()?.id,
        checkout_infomation: data
    })
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/proceed/checkout`, {
        customer_id: AuthUser()?.id,
        checkout_infomation: data
    });
}