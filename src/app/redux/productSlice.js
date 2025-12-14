import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts(state, action) {
      state.products = action.payload; // full API data
    },
    addSingleProduct(state, action) {
      state.products.push(action.payload);
    },
  },
});

export const { addProducts, addSingleProduct } = productSlice.actions;
export default productSlice.reducer;
