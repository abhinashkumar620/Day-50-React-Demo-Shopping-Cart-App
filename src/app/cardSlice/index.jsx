import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, name: "iPhone 15", price: 120000 },
    { id: 2, name: "Samsung Galaxy S24", price: 95000 },
    { id: 3, name: "MacBook Air M3", price: 145000 },
    { id: 4, name: "iPad Pro 12.9", price: 110000 },
    { id: 5, name: "Dell XPS 15", price: 130000 },
    { id: 6, name: "Sony WH-1000XM5 Headphones", price: 35000 },
    { id: 7, name: "Apple Watch Series 9", price: 45000 },
    { id: 8, name: "Google Pixel 8 Pro", price: 85000 }
  ],
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState, //this is same name like:- initialState:"initialState"
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

// ✅ Export actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// ✅ Export reducer
export default cartSlice.reducer;
