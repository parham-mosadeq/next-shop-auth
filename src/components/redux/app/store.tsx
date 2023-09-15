import { configureStore } from '@reduxjs/toolkit';
import formSlice from '../features/signupSlice';
import storeSlice from '../features/storeSlice';
const store = configureStore({
  reducer: { formState: formSlice, storeState: storeSlice },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
