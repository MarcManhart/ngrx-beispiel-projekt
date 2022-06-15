import {createAction, props} from "@ngrx/store";
import {Movie} from "../../models/movie.model";

export const loadMovies = createAction('[Movies] Load movie');
export const loadMoviesSuccess = createAction('[Movies] Load movie success', props<{ movies: Movie[] }>());
