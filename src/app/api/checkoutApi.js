import axios from "axios";

const getAuthHeader = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) return { Authorization: `Bearer ${token}` };
  }
  return {};
};

export const createCheckoutSession = async (cartItems) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/checkout`,
      { cartItems },
      { headers: { ...getAuthHeader() } }
    );

    return res.data; // { url }
  } catch (error) {
    console.error("Checkout API Error:", error);
    throw error;
  }
};

export const saveAddress = async (address) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/address`,
      address,
      { headers: { 'Content-Type': 'application/json', ...getAuthHeader() } }
    );

    return res.data;
  } catch (error) {
    console.error("Save Address Error:", error);
    throw error;
  }
};
