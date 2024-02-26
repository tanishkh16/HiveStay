
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/Auth/AuthSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
