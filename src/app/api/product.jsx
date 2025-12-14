import axios from "axios";

const getProducts = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/products`
    );
      
    return res.data.response;

  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export default getProducts;
