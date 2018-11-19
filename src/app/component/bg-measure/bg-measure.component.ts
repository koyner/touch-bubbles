import {Component, OnInit} from '@angular/core';

import {DistService} from '../../service/dist.service';
import {Dist} from '../../model/dist';

@Component({
  selector: 'app-bg-measure',
  templateUrl: './bg-measure.component.html',
  styleUrls: ['./bg-measure.component.less']
})
export class BgMeasureComponent implements OnInit {

  constructor(private distService: DistService) { }

  ngOnInit() {
  }

  get distFurthest(): Dist {
    return this.distService.distFurthest;
  }

}
