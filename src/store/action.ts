import { createAction } from '@reduxjs/toolkit';
import { Genres } from '../const';

export const setGenre = createAction('films/setGenre', (value : Genres) => ({
  payload: value
}));

export const resetGenre = createAction('films/resetGenre');
