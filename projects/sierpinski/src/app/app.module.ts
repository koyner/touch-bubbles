import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatSliderModule,
  MatInputModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatCardModule,
  MatRadioModule,
} from '@angular/material';

import {AppComponent} from './app.component';
import {NodeComponent} from './node/node.component';
import {SettingsService} from './settings/settings.service';
import {SettingsComponent} from './settings/settings.component';
import {AnimateService} from './animate/animate.service';
import {DrawService} from './draw/draw.service';

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
