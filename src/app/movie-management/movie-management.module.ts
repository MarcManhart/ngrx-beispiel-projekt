import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {movieReducer, moviesFeatureKey} from "./store/reducers/movie.reducer";
import {EffectsModule} from "@ngrx/effects";
import {MovieEffects} from "./store/effects/movie.effects";
import {MovieComponent} from './components/movie/movie.component';
import {MovieManagementRoutingModule} from "./movie-management-routing.module";
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [MovieComponent, AdminHomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    MovieManagementRoutingModule,
    StoreModule.forFeature(moviesFeatureKey, movieReducer),
    EffectsModule.forFeature([MovieEffects]),
  ],
  exports: []
})
export class MovieManagementModule {
}
