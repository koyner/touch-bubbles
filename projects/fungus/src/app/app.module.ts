import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ContainerModule} from 'mrb-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ContainerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
