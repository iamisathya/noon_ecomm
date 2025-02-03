import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Product} from '../types';

// Mock search API call
const searchProducts = (query: string): Promise<Product[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const mockProducts: Product[] = [
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
      ];

      // Simple search implementation
      const results = mockProducts.filter(product =>
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
