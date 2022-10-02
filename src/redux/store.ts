import { configureStore } from '@reduxjs/toolkit'
import pizzasSlice from './slices/pizzasSlice'
import cartSlice from './slices/cartSlice'
import filterSlice from './slices/filterSlice'
import pizzaItemSlice from './slices/pizzaItemSlice'

export const store = configureStore({
  reducer: {
    pizzas: pizzasSlice,
    cart: cartSlice,
    filter: filterSlice,
    pizzaItem: pizzaItemSlice,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
