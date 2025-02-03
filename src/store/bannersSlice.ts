import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Banner} from '../types';

const fetchBanners = (): Promise<Banner[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          image: 'https://placeholder.com/banner1',
          title: 'Summer Sale - Up to 50% Off',
        },
        {
          id: '2',
          image: 'https://placeholder.com/banner2',
          title: 'New Collection Arrival',
        },
      ]);
    }, 800);
  });
};

export const fetchBannersAsync = createAsyncThunk(
  'banners/fetchBanners',
  async () => {
    const response = await fetchBanners();
    return response;
  },
);

const bannersSlice = createSlice({
  name: 'banners',
  initialState: {
    items: [] as Banner[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBannersAsync.pending, state => {
        state.loading = true;
      })
      .addCase(fetchBannersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchBannersAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch banners';
      });
  },
});

export default bannersSlice.reducer;
