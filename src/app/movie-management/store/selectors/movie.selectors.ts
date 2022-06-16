import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromReducer from "../reducers/movie.reducer";
import * as routerSelectors from "./router.selector";
import {Movie} from "../../models/movie.model";

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

// nutzung vom router für spezifischere Abfragen auf :id Touten
export const getActiveMovie = createSelector(
  selectAllMovies,
  routerSelectors.selectRouteParams,
  (movies, {id}) => movies.find(movie => movie.id === Number(id))
);
