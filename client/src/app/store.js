import { configureStore } from '@reduxjs/toolkit';
import checkReducer from '../features/check/checkTextSlice';

export const store = configureStore({
  reducer: {
    check: checkReducer,
  },
});
