import { createReducer } from '@reduxjs/toolkit';
import { resetGenre, setGenre } from './action';
import { Genres } from '../const';

const initialState = {
  genre: Genres.AllGenres,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(resetGenre, (state) => {
      state.genre = Genres.AllGenres;
    });
});

export { reducer };
