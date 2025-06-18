
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Course } from './courseSlice';

interface CartItem extends Course {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  total: 0,
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Course>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push({ ...action.payload, quantity: 1 });
        state.total += action.payload.price;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        state.total -= item.price * item.quantity;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
