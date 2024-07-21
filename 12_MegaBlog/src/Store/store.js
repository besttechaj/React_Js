import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';

// creating a store
const store = configureStore({
  reducer: {
    // passing the reducer to the store
    authSlice: authSlice,
  },
});

export default store;
