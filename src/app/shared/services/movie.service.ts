import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Movie} from "../../movie-management/models/movie.model";


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor() {
  }

  getAll(): Observable<Movie[]> {
    let moviesMock: Movie[] = [
      {
        'id': 4,
        'title': 'Test01',
        'year': 2008
      }, {
        'id': 14,
        'title': 'Test02',
        'year': 1986
      }, {
        'id': 456,
        'title': 'Test213',
        'year': 2012
      }];
    return of(moviesMock);
  }
}
