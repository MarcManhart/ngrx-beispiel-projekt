import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "../../models/movie.model";
import {select, Store} from "@ngrx/store";
import * as fromReducer from "../../store/reducers/movie.reducer";
import {getActiveMovie} from "../../store/selectors/movie.selectors";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  movie$: Observable<Movie | undefined>;

  constructor(private store: Store<fromReducer.State>) {
    this.movie$ = this.store.pipe(select(getActiveMovie));
  }

}
