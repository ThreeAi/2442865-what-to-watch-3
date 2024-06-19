import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducser';

export const store = configureStore({reducer});
