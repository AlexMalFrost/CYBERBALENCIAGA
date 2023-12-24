import { createSlice } from '@reduxjs/toolkit';

type cartValue = {
  id: string;
}[];

type searchState = {
  value: string;
  cartvalue: cartValue;
};

const initialState: searchState = {
  value: '99999998',
  cartvalue: [{ id: '0000000' }],
};

const searchSlice = createSlice({
  name: 'searchslice',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.value = action.payload;
    },
    setCart: (state, action) => {
      state.cartvalue = action.payload;
    },
  },
});

export const { setSearch, setCart } = searchSlice.actions;

export default searchSlice.reducer;
