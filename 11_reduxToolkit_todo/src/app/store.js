// importing from (@reduxjs/toolkit: core-redux), not from react-redux(which is acts like a bridge to use redux in react)
import { configureStore } from '@reduxjs/toolkit';

import todoReducer from '../features/todo/todoSlice';

// creating store
export const store = configureStore(
  // registering reducers in store
  {
    reducer: todoReducer,
  }
);
