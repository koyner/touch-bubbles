import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MatSliderModule} from '@angular/material';

import {AppComponent} from './app.component';
import {BubbleComponent} from './component/bubble/bubble.component';
import {BgDistComponent} from './component/bg-dist/bg-dist.component';
import {BgMeasureComponent} from './component/bg-measure/bg-measure.component';
import {BgComponent} from './component/bg/bg.component';
import {BubblesComponent} from './component/bubbles/bubbles.component';
import { StatusComponent } from './component/status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    BubbleComponent,
    BgDistComponent,
    BgMeasureComponent,
    BgComponent,
    BubblesComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [
    {provide: 'Window', useValue: window}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
