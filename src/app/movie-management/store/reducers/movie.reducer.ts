import {Movie} from "../../models/movie.model";
import {createReducer, on} from "@ngrx/store";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import * as MovieActions from '../actions/movie.actions';

export const moviesFeatureKey = 'movies-management';

export interface State extends EntityState<Movie> {
  // zusätzliche Werte können hier gespeichert werden, wie z.B. "selectedMovieId"
  selectedMovieId: string | null;
}

export function sortByTitle(a: Movie, b: Movie): number {
  return a.title.localeCompare(b.title);
}

export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>({
  sortComparer: sortByTitle,
});

const initialState: State = adapter.getInitialState({
  selectedMovieId: null
});

export const movieReducer = createReducer(
  initialState,
  // on(MovieActions.loadMovies, (state) => {
  //   return state;
  // }),
  on(MovieActions.addMovie, (state, {movie}) => {
    return adapter.addOne(movie, state);
  }),
  on(MovieActions.loadMoviesSuccess, (state, {movies}) => {
    return adapter.setAll(movies, state)
  })
);


