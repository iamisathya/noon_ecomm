import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Product} from '../types';
import {store} from '.';

// Mock search API call
const searchProducts = (query: string): Promise<Product[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      // Simple search implementation
      const results = store
        .getState()
        .products.items.filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase()),
        );
      resolve(results);
    }, 500);
  });
};

export const searchProductsAsync = createAsyncThunk(
  'search/searchProducts',
  async (query: string) => {
    const response = await searchProducts(query);
    return response;
  },
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    results: [] as Product[],
    loading: false,
    error: null as string | null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    clearSearch: state => {
      state.query = '';
      state.results = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(searchProductsAsync.pending, state => {
        state.loading = true;
      })
      .addCase(searchProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(searchProductsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to search products';
      });
  },
});

export const {setSearchQuery, clearSearch} = searchSlice.actions;
export default searchSlice.reducer;
