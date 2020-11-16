import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatExpansionModule, MatTooltipModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {ButtonModule} from 'primeng';
import {HomeComponent} from './HomeComponent';
import {HomeRoutingModule} from './HomeRoutingModule';
import {HomeService} from './HomeService';

@NgModule({
            imports: [
              CommonModule,
              HomeRoutingModule,
              FormsModule,
              ReactiveFormsModule,
              MatFormFieldModule,
              MatInputModule,
              MatIconModule,
              ButtonModule,
              MatExpansionModule,
              MatTooltipModule

            ],
            declarations: [HomeComponent],
            providers   : [
              HomeService,

            ]
          })
export class HomeModule {}
