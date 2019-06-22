import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSliderModule,
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AnimateService} from './animate/animate.service';

import {AppComponent} from './app.component';
import {DrawService} from './draw/draw.service';
import {NodeComponent} from './node/node.component';
import {SettingsComponent} from './settings/settings.component';
import {SettingsService} from './settings/settings.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatRadioModule,
  ],
  declarations: [AppComponent, NodeComponent, SettingsComponent],
  bootstrap: [AppComponent],
  providers: [
    SettingsService,
    AnimateService,
    DrawService,
    {provide: 'Window', useValue: window},
  ],
})
export class AppModule {}
