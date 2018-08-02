import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BubbleComponent} from './bubble/bubble.component';

@NgModule({
  declarations: [
    AppComponent,
    BubbleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: 'Window', useValue: window}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
