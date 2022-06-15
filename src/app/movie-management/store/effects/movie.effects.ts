import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as MovieActions from "../actions/movie.actions";
import {catchError, EMPTY, map, mergeMap} from "rxjs";
import {MovieService} from "../../../shared/services/movie.service";

@Injectable()
export class MovieEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
      ofType(MovieActions.loadMovies),
      mergeMap(() => this.movieService.getAll().pipe(
        map(movies => {
          return MovieActions.loadMoviesSuccess({movies: movies});
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private movieService: MovieService
  ) {
  }
}
