import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {PaymentMethod, PaymentState} from '../types';

const initialState: PaymentState = {
  selectedMethod: {
    id: 'default-card',
    type: 'card',
    last4: '4242',
    expiryDate: '12/24',
  },
  loading: false,
  error: null,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setSelectedPaymentMethod: (state, action: PayloadAction<PaymentMethod>) => {
      state.selectedMethod = action.payload;
    },
  },
});

export const {setSelectedPaymentMethod} = paymentSlice.actions;
export default paymentSlice.reducer;
