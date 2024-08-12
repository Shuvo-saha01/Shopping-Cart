import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartArray: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartArray.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartArray = state.cartArray.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
