import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {movieReducer, moviesFeatureKey} from "./store/reducers/movie.reducer";
import {EffectsModule} from "@ngrx/effects";
import {MoviesComponent} from "./components/movies/movies.component";
import {MovieCustomerViewRoutingModule} from "./movie-customer-view-routing.module";
import {MovieEffects} from "./store/effects/movie.effects";

@NgModule({
  declarations: [MoviesComponent
  ],
  imports: [
    CommonModule,
    MovieCustomerViewRoutingModule,
    StoreModule.forFeature(moviesFeatureKey, movieReducer),
    EffectsModule.forFeature([MovieEffects]),
  ],
  exports: []
})
export class MovieCustomerViewModule {
}
