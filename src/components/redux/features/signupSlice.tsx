import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../../../../types/types';

const initialState: UserInfo = {
  name: '',
  email: '',
  password: '',
};

const formSlice = createSlice({
  name: 'login/sing-form',
  initialState,
  reducers: {
    getName: (state, action) => {
      state.name = action.payload;
    },
    getEmail: (state, action) => {
      state.email = action.payload;
    },
    getPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export default formSlice.reducer;

export const { getName, getEmail, getPassword } = formSlice.actions;
