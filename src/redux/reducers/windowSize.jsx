import { createSlice } from '@reduxjs/toolkit';

export const windowSizeSlice = createSlice({
  name: 'windowsize',
  initialState: {
    value: false,
  },
  reducers: {
    setWindowSize: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setWindowSize } = windowSizeSlice.actions;

export const selectWindowSize = (state) => state.windowsize.value;

export default windowSizeSlice.reducer;
