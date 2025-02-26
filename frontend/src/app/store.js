import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productSlice';
import themeReducer from '../features/themeSlice';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    products: productReducer,
    theme: themeReducer,
  },
  middleware: [thunk],
});