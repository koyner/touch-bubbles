import {Component, OnInit} from '@angular/core';

import {Dist} from '../../model/dist';
import {ConstantsService} from '../../service/constants.service';
import {DistService} from '../../service/dist.service';

@Component({
  selector: 'app-bg-measure',
  templateUrl: './bg-measure.component.html',
  styleUrls: ['./bg-measure.component.less'],
})
export class BgMeasureComponent implements OnInit {
  constructor(
    private distService: DistService,
    private constants: ConstantsService,
  ) {}

  ngOnInit() {}

  get x() {
    return (
      (this.distFurthest.xMid - this.distFurthest.offset) * this.constants.scale
    );
  }

  get y() {
    return (
      (this.distFurthest.yMid - this.distFurthest.offset) * this.constants.scale
    );
  }

  get side() {
    return this.distFurthest.offset * 2 * this.constants.scale;
  }

  get offset() {
    return this.distFurthest.offset * this.constants.scale;
  }

  get distFurthest(): Dist {
    return this.distService.distFurthest;
  }
}
