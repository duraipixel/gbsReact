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
export const paymentVerifyApi = async (token) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/verify/ccav/token`, {
        customer_id: AuthUser()?.id,
        token: token,
    });
}

export const checkoutApi = async (formData, setLoader) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/proceed/ccav/checkout`, {
        customer_id: AuthUser()?.id,
        checkout_infomation: formData
    });
}

export const getOrdersListApi = async () => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/get/orders`, {
        customer_id: AuthUser()?.id,
    });
}
export const getOrderDetailApi = async (order_no) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/get/orderByno`, {
        customer_id: AuthUser()?.id,
        order_no: order_no
    });
}

export const cancelOrderApi = async (formData) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/cancel/request/orders`, formData);
}
export const compareProductApi = async (formData) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/compare/product`, { product_id: formData });
}