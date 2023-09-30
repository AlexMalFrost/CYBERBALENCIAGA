import { createSlice } from '@reduxjs/toolkit';

type navDropSwitcherState = {
  value: string;
};

const initialState: navDropSwitcherState = {
  value: 'none',
};
export const navDropSwitcherSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeNavDropState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeNavDropState } = navDropSwitcherSlice.actions;

export default navDropSwitcherSlice.reducer;
