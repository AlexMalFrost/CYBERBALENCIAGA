import { createSlice } from '@reduxjs/toolkit';

type itemState = {
  value: string;
};

const initialState: itemState = {
  value: '00000',
};

const itemSlice = createSlice({
  name: 'itemSlice',
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setItem } = itemSlice.actions;

export default itemSlice.reducer;
