import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

// helper to parse price strings like "29 19" or "£29 19" or numeric values
function parsePrice(price) {
  if (price === undefined || price === null) return 0;
  if (typeof price === 'number') return price;
  const s = String(price).trim();
  if (!s) return 0;
  const parts = s.split(/\s+/);
  const last = parts[parts.length - 1].replace(/[^0-9.]/g, '');
  const n = parseFloat(last);
  return Number.isNaN(n) ? 0 : n;
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const payload = action.payload || {};
      const id = payload.id ?? payload._id; // support both id and _id
      const priceNum = parsePrice(payload.price ?? payload.priceNum ?? payload.amount);

      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + 1;
      } else {
        const newItem = {
          ...payload,
          id,
          quantity: 1,
          priceNum,
        };
        state.items.push(newItem);
      }

      // recompute total to avoid incremental drift
      state.total = state.items.reduce((sum, it) => {
        const p = it.priceNum ?? parsePrice(it.price);
        return sum + (p * (it.quantity || 0));
      }, 0);
    },
    removeItem(state, action) {
      const id = action.payload?.id ?? action.payload?._id ?? action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
      state.total = state.items.reduce((sum, it) => {
        const p = it.priceNum ?? parsePrice(it.price);
        return sum + (p * (it.quantity || 0));
      }, 0);
    },
    updateCartQuantity(state, action) {
      const { itemId, newQuantity } = action.payload;
      const id = itemId ?? action.payload?.id ?? action.payload?._id;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        item.quantity = newQuantity;
      }
      state.total = state.items.reduce((sum, it) => {
        const p = it.priceNum ?? parsePrice(it.price);
        return sum + (p * (it.quantity || 0));
      }, 0);
    },
    addProduct(state, action) {
      const payload = action.payload || {};
      const id = payload.id ?? payload._id;
      const priceNum = parsePrice(payload.price ?? payload.priceNum ?? payload.amount);
      const newItem = { ...payload, id, quantity: payload.quantity ?? 1, priceNum };
      state.items.push(newItem);
      state.total = state.items.reduce((sum, it) => {
        const p = it.priceNum ?? parsePrice(it.price);
        return sum + (p * (it.quantity || 0));
      }, 0);
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, updateCartQuantity, addProduct, clearCart } = cartSlice.actions;
