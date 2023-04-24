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

export const cartListApi = async (data) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/get/cart`, {
        customer_id: AuthUser()?.id,
        guest_token: localStorage.getItem('guest_token'),
    });
}

export const updateCartApi = async (data) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/update/cart`, data);
}