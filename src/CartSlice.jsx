import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Check if item already exists in cart
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        // If item exists, increase quantity
        existingItem.quantity += 1;
      } else {
        // If item doesn't exist, add it with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // Remove item from cart by name
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      // Find item by name and update its quantity
      const item = state.items.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
