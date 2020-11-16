import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonToggleModule, MatIconModule, MatSelectModule, MatTooltipModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {ButtonModule, FileUploadModule} from 'primeng';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppService} from './AppService';
import {AppTooltipModule} from './plugins/app-tooltip/AppTooltipModule';

@NgModule({
            declarations: [
              AppComponent,

            ],
            imports     : [
              HttpClientModule,
              BrowserModule,
              AppRoutingModule,
              BrowserAnimationsModule,
              MatInputModule,
              FormsModule,
              MatIconModule,
              MatSelectModule,
              ToastrModule.forRoot(),
              FileUploadModule,
              ButtonModule,
              MatButtonToggleModule,
              MatTooltipModule,
              AppTooltipModule

            ],
            providers   : [
              AppService,
            ],
            bootstrap   : [AppComponent]
          })
export class AppModule {}
