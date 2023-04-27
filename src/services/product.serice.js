import axios from "axios";
import { toast } from "react-hot-toast";
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
export const paymentVerifyApi = async (razor_response, status) => {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/verify/payment/signature`, {
        customer_id: AuthUser()?.id,
        razor_response: razor_response,
        status: status
    });
    if (data.success) {
        localStorage.removeItem('cart_list')
        toast.success(data.message)
    } else {
        toast.error(data.message)
    }
}

export const checkoutApi = async (formData, setLoader) => {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/proceed/checkout`, {
        customer_id: AuthUser()?.id,
        checkout_infomation: formData
    });
    const paymenyOptions = {
        key: data.key,
        name: data.name,
        image: data.image,
        order_id: data.order_id,
        handler: function (response) {
            paymentVerifyApi(response, true).then((res) => setLoader(false));
        },
        prefill: {
            name: data.prefill.name,
            email: data.prefill.email,
            contact: parseInt(data.prefill.contact),
        },
        theme: {
            color: "#f00008",
        },
    };
    return paymenyOptions;
}