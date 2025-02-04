import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {Product} from '../types';

// Mock API call
const fetchProducts = (): Promise<Product[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          name: 'Apple Watch 10',
          price: 99.99,
          image:
            'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-titanium-slate-cell-s10_VW_34FR+watch-face-46-titanium-slate-s10_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnWTc4blplVGNpSEZpNjZUNjVaN2NmQ0hYdElIVEV6MlVLNjZQdWRicTV0RXZmQXlUU2xCQ2pTN3lrcDE0UU1hK0VYZWthQXJCL2NtQ1RrVVMvZXZWQVlBdzhRZzJqU0xkSEpFODEzRDVva3d4cnowOGUwOFg4VWVNRXJPTkZzcHZQTlY1VVpZdTJWU1VmK0FXKzlpeFZuTUFmS01ENEh4NEQwRjBrU05JY28wQzNiOGxMcmwyTlFWWWQ3aG8rVWEvQithakZ1L1d4WC9tL0hOc1g4SFhobg',
          tags: ['free delivery', 'selling fast'],
          category: 'electronics',
        },
        {
          id: '2',
          name: 'AirPods Pro 2',
          price: 199.99,
          image:
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=375&hei=278&fmt=jpeg&qlt=95&.v=1724041668836',
          tags: ['new arrival'],
          category: 'electronics',
        },
        {
          id: '3',
          name: 'iPhone 16 Pro',
          price: 699.99,
          image:
            'https://inspireonline.in/cdn/shop/files/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1b__en-IN_496a8e3b-3c5a-4dc4-8c2e-82dbb1c29ee3.jpg?v=1727250634&width=823',
          tags: ['new arrival'],
          category: 'electronics',
        },
        {
          id: '4',
          name: 'Samsung S25 Ultra',
          price: 699.99,
          image:
            'https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s25-ultra/buy/S25_Ultra_PDP_exclusive_desktop_black.jpg?imbypass=true',
          tags: ['new arrival'],
          category: 'electronics',
        },
        {
          id: '3',
          name: 'Mexico Lace-Up Sneakers',
          price: 79.99,
          image:
            'https://assets.ajio.com/medias/sys_master/root/20230109/5cNi/63bc09d8f997dd708ef49839/-473Wx593H-469434418-oliveoffwhite-MODEL.jpg',
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
