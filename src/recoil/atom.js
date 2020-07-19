import { atom } from 'recoil';

export const MoviesState = atom({
  key: 'MoviesState',
  default: JSON.parse(localStorage.getItem('res')) || null,
});

export const ModifiedMovieState = atom({
  key: 'ModifiedMovieState',
  default: JSON.parse(localStorage.getItem('modifiedRes')) || null,
});
