import { createSlice, compose } from '@reduxjs/toolkit';
import { Products, StoreInitState } from '../../../../types/types';

const initialState = {
  products: [],
  qyt: 0,
  isCheckedOut: false,
  totalPrice: 0,
};

const storeSlice = createSlice({
  name: 'store-slice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products = [...state.products, action.payload];
      state.qyt++;
    },
    removeFromCart: (state, action) => {},
    checkOut: (state, action) => {},
  },
});

export default storeSlice.reducer;

export const { addToCart, removeFromCart, checkOut } = storeSlice.actions;
