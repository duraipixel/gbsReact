import axios from "axios";
import { setAuthUser } from "utils";

export const LoginApi = async (credentials) => {
    credentials['guest_token'] = localStorage.getItem('guest_token')
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, credentials);
    setAuthUser(response.data.customer)
    localStorage.setItem("user_verfied", true)
    return response
}

export const Logout = () => {
    localStorage.clear();
    sessionStorage.clear(); 
};

export const RegisterApi = async (credentials) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/register/customer`, credentials);
    if (response.data) {
        setAuthUser(response.data.customer)
    }
    return response.data;
}

export const VerfiyAccountApi = async (token) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/verify/account`, {
        token: token
    });
}

export const VerfiyResetPasswordApi = async (token) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/check/tokenValid`, {
        token_id: token
    });
}

export const sendResetPasswordApi = async (email) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/send/password/link`, email);
}

export const ResetPasswordApi = async (data) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/reset/password`, data);
}