import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MovieComponent} from "./components/movie/movie.component";
import {AdminHomeComponent} from "./components/admin-home/admin-home.component";

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent
  },
  {
    path: ':id',
    component: MovieComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieManagementRoutingModule {
}
