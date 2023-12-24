import { createSlice } from '@reduxjs/toolkit';

type windowSizeState = {
  value: boolean;
};

const initialState: windowSizeState = {
  value: false,
};

const windowSizeSlice = createSlice({
  name: 'windowsize',
  initialState,
  reducers: {
    setWindowSize: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setWindowSize } = windowSizeSlice.actions;

export default windowSizeSlice.reducer;
