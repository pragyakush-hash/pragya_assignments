import axios from "axios";
const API_URL = "http://localhost:8080";

export const signupUser = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/user/register`, formData);
    console.log(response, "register response");
    return response;
  } catch (error) {
    throw error.response;
  }
};
export const emailVerificationFetch = async (emailVerify) => {
  try {
    const response = await axios.post(`${API_URL}/api/sendotp/`, {
      email: emailVerify,
    });
    return response;
  } catch (error) {
    throw error.response;
  }
};
export const loginUserFetch = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, loginData);
    return response;
  } catch (error) {
    throw error.response;
  }
};


