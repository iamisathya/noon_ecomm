import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {Product} from '../types';

// Mock API call
const fetchProducts = (): Promise<Product[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          name: 'Wireless Earbuds',
          price: 99.99,
          image: 'https://placeholder.com/electronics/earbuds',
          tags: ['free delivery', 'selling fast'],
          category: 'electronics',
        },
        {
          id: '2',
          name: 'Smart Watch',
          price: 199.99,
          image: 'https://placeholder.com/electronics/watch',
          tags: ['new arrival'],
          category: 'electronics',
        },
        {
          id: '3',
          name: 'Running Shoes',
          price: 79.99,
          image: 'https://placeholder.com/sports/shoes',
          tags: ['free delivery'],
          category: 'sports',
        },
      ]);
    }, 1000);
  });
};

export const fetchProductsAsync = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetchProducts();
    return response;
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [] as Product[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProductsAsync.pending, state => {
        state.loading = true;
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export default productsSlice.reducer;
