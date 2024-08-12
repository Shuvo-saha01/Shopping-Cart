import {configureStore} from "@reduxjs/toolkit"
import productReducer from "../features/productsSlice.js"
import cartReducer from "../features/cartSlice.js"

export const shoppingStore = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,

    }
})