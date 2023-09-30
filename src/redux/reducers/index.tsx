import { combineReducers } from 'redux';
import windowsize from './windowSize';
import navdropswitcher from './counterSlice';

const rootReducer = combineReducers({
  windowsize,
  navdropswitcher,
});

export type winSatte = ReturnType<typeof rootReducer>;

export default rootReducer;
