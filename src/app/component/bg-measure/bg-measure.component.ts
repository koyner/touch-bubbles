import {Component, OnInit} from '@angular/core';

import {DistService} from '../../service/dist.service';
import {Dist} from '../../model/dist';
import {ConstantsService} from '../../service/constants.service';

@Component({
  selector: 'app-bg-measure',
  templateUrl: './bg-measure.component.html',
  styleUrls: ['./bg-measure.component.less']
})
export class BgMeasureComponent implements OnInit {

  constructor(private distService: DistService,
              private constants: ConstantsService) {
  }

  ngOnInit() {
  }

  get left() {
    return (this.distFurthest.x - this.distFurthest.offset) * this.constants.side;
  }

  get top() {
    return (this.distFurthest.y - this.distFurthest.offset) * this.constants.side;
  }

  get side() {
    return this.distFurthest.offset * 2 * this.constants.side;
  }

  get offset() {
    return this.distFurthest.offset * this.constants.side;
  }

  get distFurthest(): Dist {
    return this.distService.distFurthest;
  }

}
