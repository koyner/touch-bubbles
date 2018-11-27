import {Component, Input, OnInit} from '@angular/core';

import {Dist} from '../../model/dist';
import {DistService} from '../../service/dist.service';
import {ConstantsService} from '../../service/constants.service';

@Component({
  selector: 'app-bg-dist',
  templateUrl: './bg-dist.component.html',
  styleUrls: ['./bg-dist.component.less']
})
export class BgDistComponent implements OnInit {

  @Input() dist: Dist;

  constructor(private distService: DistService,
              private constants: ConstantsService) {
  }

  ngOnInit() {
  }

  isFurthest(): boolean {
    return this.dist === this.distService.distFurthest;
  }

  get x() {
    return this.dist.xMin * this.constants.side;
  }

  get y() {
    return this.dist.yMin * this.constants.side;
  }

  get width() {
    return this.dist.w * this.constants.side;
  }

  get height() {
    return this.dist.h * this.constants.side;
  }

  get col() {
    const col = this.dist.offset * this.constants.side * 1.5;
    return `rgb(${col},${col},${col})`;
  }

}
