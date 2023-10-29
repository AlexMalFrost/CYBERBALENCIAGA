import { combineReducers } from 'redux';
import windowsize from './windowSize';
import navdropswitcher from './counterSlice';
import searchslice from './searchReducer';
import searchswitcher from './searchSwitcher';

const rootReducer = combineReducers({
  windowsize,
  navdropswitcher,
  searchslice,
  searchswitcher,
});

export type winSatte = ReturnType<typeof rootReducer>;

export default rootReducer;
