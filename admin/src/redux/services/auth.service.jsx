import axios from "axios";
import { axiosAuth, axiosAuthUpload } from '../../config/axios';
import { API_URLS } from "../../config/url";

const login = (email, password) => {
  return axios
    .post(API_URLS + "auth/login", {
      email,
      password,
    })
    .then((response) => {
      console.log(response)
      if (response.data.tokens) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  login,
  logout,
};

export default authService;