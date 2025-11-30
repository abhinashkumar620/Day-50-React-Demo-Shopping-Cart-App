import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../counterSlice'
import cartSlice from '../cardSlice'
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
  },
})
