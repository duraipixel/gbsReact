import axios from "axios";

export const Login = async (credentials) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, credentials);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
}

export const Logout = () => {
    localStorage.removeItem("user");
};

export const RegisterApi = async (credentials) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/register/customer`, credentials);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data.customer_data));
    }
    return response.data;
}

export const VerfiyAccountApi = async (token) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/verify/account`, {
        token: token
    });
}