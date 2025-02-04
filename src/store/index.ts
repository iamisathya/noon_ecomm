import {configureStore} from '@reduxjs/toolkit';

import productsReducer from './productsSlice';
import bannersReducer from './bannersSlice';
import searchReducer from './searchSlice';
import cartReducer from './cartSlice';
import paymentReducer from './paymentSlice';
import orderReducer from './orderSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    banners: bannersReducer,
    search: searchReducer,
    cart: cartReducer,
    payment: paymentReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
