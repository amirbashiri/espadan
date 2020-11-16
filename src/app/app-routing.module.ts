import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path        : '',
    loadChildren: () => import('./home/HomeModule').then(m => m.HomeModule)
  },
  {
    path        : 'errors',
    loadChildren: () => import('./errors/ErrorModule').then(m => m.ErrorModule)
  },
  {
    path      : '**',
    redirectTo: 'errors/404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
