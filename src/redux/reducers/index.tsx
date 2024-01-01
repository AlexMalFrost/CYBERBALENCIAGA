import { combineReducers } from 'redux';
import windowsize from './windowSize';
import navdropswitcher from './counterSlice';
import searchslice from './searchReducer';
import searchswitcher from './searchSwitcher';
import itemslice from './itemReducer';
import searchreducer from './searchReducer';

const rootReducer = combineReducers({
  windowsize,
  navdropswitcher,
  searchslice,
  searchswitcher,
  itemslice,
  searchreducer,
});

export type winSatte = ReturnType<typeof rootReducer>;

export default rootReducer;
