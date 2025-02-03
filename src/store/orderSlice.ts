import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {OrderItem} from '../types';

interface OrderState {
  currentOrder: {
    items: OrderItem[];
    total: number;
    orderNumber?: string;
    status: 'pending' | 'confirmed' | 'failed';
  };
}

const initialState: OrderState = {
  currentOrder: {
    items: [],
    total: 0,
    status: 'pending',
  },
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderStatus: (
      state,
      action: PayloadAction<'pending' | 'confirmed' | 'failed'>,
    ) => {
      state.currentOrder.status = action.payload;
    },
    resetOrder: state => {
      state.currentOrder = initialState.currentOrder;
    },
  },
});

export const {setOrderStatus, resetOrder} = orderSlice.actions;
export default orderSlice.reducer;
