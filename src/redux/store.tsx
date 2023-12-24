import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import windowSizeReducer from './reducers/windowSize';
import searchSlice from './reducers/searchReducer';
import searchSwitcher from './reducers/searchSwitcher';
import itemSlice from './reducers/itemReducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  navdropswitcher: counterReducer,
  windowsize: windowSizeReducer,
  searchslice: searchSlice,
  searchswitcher: searchSwitcher,
  itemslice: itemSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['navdropswitcher', 'windowsize', 'searchswitcher'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
