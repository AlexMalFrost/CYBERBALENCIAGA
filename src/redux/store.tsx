import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import windowSizeReducer from './reducers/windowSize';

export default configureStore({
  reducer: {
    navdropswitcher: counterReducer,
    windowsize: windowSizeReducer,
  },
});
