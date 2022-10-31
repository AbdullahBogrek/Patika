import { configureStore } from "@reduxjs/toolkit"

import productsSlice from "./Products/productsSlice"

export const store = configureStore({
    reducer: {
        products: productsSlice, 
    }
})