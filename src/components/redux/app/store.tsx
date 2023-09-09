import { configureStore } from '@reduxjs/toolkit';
import formSlice from '../features/signupSlice';
const store = configureStore({
  reducer: { formState: formSlice },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;