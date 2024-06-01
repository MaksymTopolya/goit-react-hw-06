import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filtersSlice from './filtersSlice';
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




const persistedBalanceReducer = persistReducer(
  {
    key: 'users',
    storage,
  },
  contactsReducer
);


export const store = configureStore({
  reducer: {
    contacts: persistedBalanceReducer,
    filters: filtersSlice
  },  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);
