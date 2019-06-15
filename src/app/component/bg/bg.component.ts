import {Component, OnInit} from '@angular/core';

import {Dist} from '../../model/dist';
import {ConstantsService} from '../../service/constants.service';
import {DistService} from '../../service/dist.service';

@Component({
  selector: 'app-bg',
  templateUrl: './bg.component.html',
  styleUrls: ['./bg.component.less'],
})
export class BgComponent implements OnInit {
  constructor(
    private distService: DistService,
    private constants: ConstantsService,
  ) {}

  ngOnInit() {}

  get dists(): Dist[][] {
    return this.distService.dists;
  }

  getOffset(dist: Dist) {
    return dist.offset * this.constants.scale;
  }
}
