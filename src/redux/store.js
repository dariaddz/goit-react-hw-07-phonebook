import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'redux/contactsApi';
import filterReducer from './FilterSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
