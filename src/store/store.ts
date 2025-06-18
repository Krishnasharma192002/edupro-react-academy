
import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './slices/courseSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    courses: courseReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
