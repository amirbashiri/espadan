import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {Error404Component} from "./404/Error404Component";
import {ErrorComponent} from "./ErrorComponent";
import {ErrorsRoutingModule} from "./ErrorsRoutingModule";

@NgModule(
  {
    imports     : [
      CommonModule,
      ErrorsRoutingModule
    ],
    providers   : [],
    declarations: [Error404Component,ErrorComponent],
    exports     : [Error404Component,ErrorComponent]
  }
)
export class ErrorModule
{

}
