import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BubbleComponent} from './component/bubble/bubble.component';
import { BgDiscComponent } from './component/bg-disc/bg-disc.component';
import { BgMeasureComponent } from './component/bg-measure/bg-measure.component';
import { BgComponent } from './component/bg/bg.component';

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
