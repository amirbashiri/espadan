import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppTooltipComponent} from './AppTooltipComponent';
import {AppTooltipDirective} from './AppTooltipDirective';

@NgModule(
    {
        imports     : [
            CommonModule
        ],
        providers   : [],
        declarations: [
          AppTooltipComponent,
          AppTooltipDirective
        ],
        exports     : [
          AppTooltipDirective
        ]
    }
)
export class AppTooltipModule
{

}
