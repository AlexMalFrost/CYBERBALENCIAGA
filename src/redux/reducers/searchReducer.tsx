import { createSlice } from '@reduxjs/toolkit';

type searchState = {
  value: string;
};

const initialState: searchState = {
  value: '',
};

const searchSlice = createSlice({
  name: 'searchslice',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
