import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BubbleComponent} from './bubble/bubble.component';
import { BgDiscComponent } from './bg-disc/bg-disc.component';
import { BgMeasureComponent } from './bg-measure/bg-measure.component';
import { BgComponent } from './bg/bg.component';

@NgModule({
  declarations: [
    AppComponent,
    BubbleComponent,
    BgDiscComponent,
    BgMeasureComponent,
    BgComponent
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
