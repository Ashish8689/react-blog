import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../features/blogsSlice';
import hamburgerReducer from '../features/hamburger/hamburgerSlice';

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    hamburger: hamburgerReducer,
  },
});
