import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'movie-management',
    loadChildren: () => import('./movie-management/movie-management.module').then(m => m.MovieManagementModule)
  },
  {
    path: 'movie-customer-view',
    loadChildren: () => import('./movie-customer-view/movie-customer-view.module').then(m => m.MovieCustomerViewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
