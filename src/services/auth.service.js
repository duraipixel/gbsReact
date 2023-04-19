import axios from "axios";

const Login = (credentials) => {
    return axios.post(`${process.env.REACT_APP_BASE_URL}/login`, credentials).then((response) => {
        if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
}

const Logout = () => {
    localStorage.removeItem("user");
};

export default {
    Login,
    Logout
};