import {Component} from '@angular/core';
import {ConstantsService} from './constants.service';

@Component({
  selector: 'app-mrb-ui-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less'],
})
export class ContainerComponent {
  constructor(private constants: ConstantsService) {}

  onResize() {
    this.constants.resize();
  }

  get left(): number {
    return (this.constants.winW - this.side) / 2;
  }

  get top(): number {
    return (this.constants.winH - this.side) / 2;
  }

  get side(): number {
    return this.constants.scale;
  }
}
