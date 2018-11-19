import {Component, OnInit} from '@angular/core';

import {DistService} from '../../service/dist.service';
import {Dist} from '../../model/dist';

@Component({
  selector: 'app-bg',
  templateUrl: './bg.component.html',
  styleUrls: ['./bg.component.less']
})
export class BgComponent implements OnInit {

  constructor(private distService: DistService) { }

  ngOnInit() {
  }

  get dists(): Array<Array<Dist>> {
    return this.distService.dists;
  }

}
