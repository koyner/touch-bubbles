import {Component, OnInit} from '@angular/core';

import {DistService} from '../../service/dist.service';
import {Dist} from '../../model/dist';
import {ConstantsService} from '../../service/constants.service';

@Component({
  selector: 'app-bg',
  templateUrl: './bg.component.html',
  styleUrls: ['./bg.component.less']
})
export class BgComponent implements OnInit {

  constructor(private distService: DistService,
              private constants: ConstantsService) { }

  ngOnInit() {
  }

  get dists(): Array<Array<Dist>> {
    return this.distService.dists;
  }

  getOffset(dist: Dist) {
    return dist.offset * this.constants.side;
  }

}
