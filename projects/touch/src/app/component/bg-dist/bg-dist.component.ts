import {Component, Input, OnInit} from '@angular/core';

import {Dist} from '../../model/dist';
import {DistService} from '../../service/dist.service';

import {ConstantsService} from 'mrb-ui';

@Component({
  selector: 'app-bg-dist',
  templateUrl: './bg-dist.component.html',
  styleUrls: ['./bg-dist.component.less'],
})
export class BgDistComponent implements OnInit {
  @Input() dist: Dist;

  constructor(
    private distService: DistService,
    private constants: ConstantsService,
  ) {}

  ngOnInit() {}

  isFurthest(): boolean {
    return this.dist === this.distService.distFurthest;
  }

  get x() {
    return this.dist.x * this.constants.scale;
  }

  get y() {
    return this.dist.y * this.constants.scale;
  }

  get width() {
    return this.dist.w * this.constants.scale;
  }

  get height() {
    return this.dist.h * this.constants.scale;
  }

  get brightness() {
    return Math.floor(2 * this.dist.offset * 255);
  }

  get col() {
    return `rgb(${this.brightness},${this.brightness},${this.brightness})`;
  }
}
