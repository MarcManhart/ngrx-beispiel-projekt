import {Component, OnInit} from '@angular/core';
import * as fromReducer from "../../store/reducers/movie.reducer"
import * as fromActions from "../../store/actions/movie.actions"
import {select, Store} from "@ngrx/store";
import {loadMovies} from "../../store/actions/movie.actions";
import {Observable} from "rxjs";
import {Movie} from "../../models/movie.model";
import {selectAllMovies} from "../../store/selectors/movie.selectors";

@Component({
  selector: 'app-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  movies$: Observable<Movie[]> = this.store.pipe(select(selectAllMovies));

  constructor(private store: Store<fromReducer.State>) {
    this.store.dispatch(loadMovies());
  }

  ngOnInit(): void {
  }

  addMovie(id: string, title: string, year: string) {
    let _id = Number(id);
    let _title = title;
    let _year = Number(year);
    this.store.dispatch(fromActions.addMovie({movie: {id: _id, title: _title, year: _year}}));
  }

  // onMovieTitleClick(id: number) {
  // }
}
