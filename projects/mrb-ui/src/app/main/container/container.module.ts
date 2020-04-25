import {NgModule} from '@angular/core';
import {ConstantsService, WINDOW} from './constants.service';
import {ContainerComponent} from './container.component';

export function _window() {
  return window;
}

@NgModule({
  declarations: [ContainerComponent],
  imports: [],
  exports: [ContainerComponent],
  providers: [{provide: WINDOW, useFactory: _window}, ConstantsService],
})
export class ContainerModule {}
