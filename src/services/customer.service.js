import axios from "axios";
import { AuthUser, setAuthUser } from "utils";

export const updateProfileApi = async (data) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/update/profile`, data);
    if (response) {
        setAuthUser(response.data.customer)
    }
    return response.data;
}

export const updatePasswordApi = async (data) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/change/password`, data);
}

export const customerAddressApi = async (data) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/get/addresses`, {
        customer_id: AuthUser()?.id
    });
    localStorage.setItem("customer_address", JSON.stringify(response.data.addresses))
    return response
}

export const updateOrCreateAddressApi = async (data) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/save/customer/address`, data);
    localStorage.setItem("customer_address", JSON.stringify(response.data.addresses))
    return response
}

export const deleteAddressApi = async (address_id) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/delete/customer/address`, {
        customer_id: AuthUser()?.id,
        customer_address_id: address_id
    });
}