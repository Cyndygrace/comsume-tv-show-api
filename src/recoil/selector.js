import { selector } from 'recoil';
import { MoviesState } from './atom';
import { ModifiedMovieState } from './atom';

export const SearchResult = selector({
  key: 'SearchResult',
  get: async ({ get }) => {
    let movie = await get(MoviesState);
    return movie;
  },
});

export const ModifiedMovieResult = selector({
  key: 'ModifiedMovieResult',
  get: async ({ get }) => {
    let modifiedMovie = await get(ModifiedMovieState);
    return modifiedMovie;
  },
});
