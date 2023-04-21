import axios from "axios";
import { setAuthUser } from "utils";

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