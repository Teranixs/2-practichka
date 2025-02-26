import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productSlice';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
  middleware: [thunk],
});