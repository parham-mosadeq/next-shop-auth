import { createSlice, current } from '@reduxjs/toolkit';
import { StoreInitState } from '../../../../types/types';

const initialState: StoreInitState = {
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

      window.localStorage.setItem('store', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
      state.qyt--;
      window.localStorage.setItem('store', JSON.stringify(state));
    },
    checkOut: (state, action) => {},
  },
});

export default storeSlice.reducer;

export const { addToCart, removeFromCart, checkOut } = storeSlice.actions;
