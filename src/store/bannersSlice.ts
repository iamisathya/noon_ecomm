import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Banner} from '../types';

const fetchBanners = (): Promise<Banner[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          image:
            'https://img.freepik.com/premium-vector/2025-new-year-sale-banner_1281977-121.jpg?semt=ais_hybrid',
          title: 'New year Sale',
        },
        {
          id: '2',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAS6YfxDGTdt3wC15Cjc9VKFPI-CouPAkN8A&s',
          title: 'Summer Sale - Up to 60% Off',
        },
        {
          id: '3',
          image:
            'https://img.freepik.com/premium-vector/free-delivery-banner-with-courier-scooter-delivers-package-free-shipping-order-fast-delivery-badge-advertisement-express-delivery-with-man-scooter-vector-illustration_435184-1202.jpg',
          title: 'Free delivey on 1000Rs order',
        },
        {
          id: '4',
          image:
            'https://img.freepik.com/free-vector/new-arrival-collection-modern-banner-design_1017-36608.jpg',
          title: 'New arrival',
        },
      ]);
    }, 2000);
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
        console.log('action.payload', action.payload);
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
