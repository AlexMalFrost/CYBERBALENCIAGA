import { createSlice } from '@reduxjs/toolkit';

type searchStateSwitcher = {
  value: boolean;
  logvalue: boolean;
};

const initialState: searchStateSwitcher = {
  value: false,
  logvalue: false,
};

const searchSwitcher = createSlice({
  name: 'searchSwitcher',
  initialState,
  reducers: {
    setSwitcher: (state, action) => {
      state.value = action.payload;
    },
    setLogSwitcher: (state, action) => {
      state.logvalue = action.payload;
    },
  },
});

export const { setSwitcher, setLogSwitcher } = searchSwitcher.actions;

export default searchSwitcher.reducer;
