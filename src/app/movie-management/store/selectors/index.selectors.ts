import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromReducer from "../reducers/movie.reducer";

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = fromReducer.adapter.getSelectors();

export const getMovieState = createFeatureSelector<fromReducer.State>(fromReducer.moviesFeatureKey);

export const selectMovieIds = createSelector(getMovieState, selectIds);
export const selectAllMovies = createSelector(getMovieState, selectAll);
export const selectMovieEntities = createSelector(getMovieState, selectEntities);
export const selectMovieTotal = createSelector(getMovieState, selectTotal);

export const selectSelectedMovieId = createSelector(getMovieState, state => state.selectedMovieId)
