import { createSlice } from '@reduxjs/toolkit';

type searchStateSwitcher = {
  value: boolean;
};

const initialState: searchStateSwitcher = {
  value: false,
};

const searchSwitcher = createSlice({
  name: 'searchSwitcher',
  initialState,
  reducers: {
    setSwitcher: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSwitcher } = searchSwitcher.actions;

export default searchSwitcher.reducer;
