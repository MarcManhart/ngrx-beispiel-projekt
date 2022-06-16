import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {loadMovies} from "../../../movie-management/store/actions/movie.actions";
import * as fromReducer from "../../../movie-management/store/reducers/movie.reducer"
import {selectAllMovies} from "../../../movie-management/store/selectors/movie.selectors";
import {Observable} from "rxjs";
import {Movie} from "../../../movie-management/models/movie.model";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies$: Observable<Movie[]>;

  constructor(private store: Store<fromReducer.State>) {
    this.store.dispatch(loadMovies());
    this.movies$ = this.store.pipe(select(selectAllMovies))
  }

  ngOnInit(): void {
  }

}
