import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  productArray: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.productArray = action.payload;
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;

// addProduct(action) = {
//     id: nanoid,
//     imgSrc: "image source link in here",
//     price: "the price will be witten in here"
// }
