import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BubbleComponent} from './component/bubble/bubble.component';
import {BgDistComponent} from './component/bg-dist/bg-dist.component';
import {BgMeasureComponent} from './component/bg-measure/bg-measure.component';
import {BgComponent} from './component/bg/bg.component';
import {BubblesComponent} from './component/bubbles/bubbles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BubbleComponent,
    BgDistComponent,
    BgMeasureComponent,
    BgComponent,
    BubblesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: 'Window', useValue: window}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
