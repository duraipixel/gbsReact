import axios from "axios";

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