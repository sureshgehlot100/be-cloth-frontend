import axios from 'axios';

const getAuthHeader = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) return { Authorization: `Bearer ${token}` };
  }
  return {};
};

export const orderApi = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/order`,
      { headers: { ...getAuthHeader() } }
    );
    return res.data;
  } catch (error) {
    console.error('orderApi error', error);
    // rethrow so caller can handle
    throw error;
  }
};
