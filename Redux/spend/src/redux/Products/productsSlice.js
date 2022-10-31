import { createSlice } from "@reduxjs/toolkit";

import data from "../../data.json" 

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: data,
        budget: 100000000000,
        initialBudget: 100000000000,
    },
    reducers: {
        setBudget: (state, action) => {
            const { id, count } = action.payload

            const purchasedItem = state.items.find(item => item.id === id)
            purchasedItem.count = count
            
            let price = 0
            state.items.map(item => (
                price += Number(item.count) * Number(item.price)
            ))

            state.budget = Number(state.initialBudget) - Number(price)
        }
    }
})

export const { setBudget } = productsSlice.actions
export default productsSlice.reducer