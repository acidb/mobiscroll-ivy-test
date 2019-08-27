import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MbscInputModule } from '../mobiscroll/js/mobiscroll.angular.min';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MbscInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
