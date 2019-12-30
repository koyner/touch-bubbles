import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Demo1Component} from './demo1/demo1.component';
import {NavComponent} from './nav/nav.component';
import {Demo2Component} from './demo2/demo2.component';
import {Demo3Component} from './demo3/demo3.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    NavComponent,
    Demo2Component,
    Demo3Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
