import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Error404Component} from './404/Error404Component';
import {ErrorComponent} from './ErrorComponent';


const routes: Routes = [
  {
    path     : '',
    component: ErrorComponent,
    children : [
      {
        path      : '',
        redirectTo: '404',
        pathMatch : 'full',
      },
      {path: '404', component: Error404Component, pathMatch: 'full'},
    ]
  }
];

@NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
          })
export class ErrorsRoutingModule
{

}
