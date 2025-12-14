import axios from "axios";

export const createCheckoutSession = async (cartItems) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/checkout`,
      {
        cartItems,
      }
    );

    return res.data; // { url }
  } catch (error) {
    console.error("Checkout API Error:", error);
    throw error;
  }
};
