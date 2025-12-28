import axios from "axios";

export const loginApi = async (email, password) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_ENDPOINT}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const register = async (form) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_ENDPOINT}/auth/register`, form);
    return response.data;
  } catch (error) {
    console.error("Register error:", error);
    throw error;
  }
}
