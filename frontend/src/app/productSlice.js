import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, addProduct, updateProduct, deleteProduct } from '../utils/api';

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const response = await fetchProducts();
  return response;
});

export const createProduct = createAsyncThunk('products/createProduct', async (product) => {
  const response = await addProduct(product);
  return response;
});

export const editProduct = createAsyncThunk('products/editProduct', async (product) => {
  const response = await updateProduct(product);
  return response;
});

export const removeProduct = createAsyncThunk('products/removeProduct', async (id) => {
  await deleteProduct(id);
  return id;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default productSlice.reducer;