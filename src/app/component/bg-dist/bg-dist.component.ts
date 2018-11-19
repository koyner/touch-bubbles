import {Component, Input, OnInit} from '@angular/core';

import {Dist} from '../../model/dist';
import {DistService} from '../../service/dist.service';

@Component({
  selector: 'app-bg-dist',
  templateUrl: './bg-dist.component.html',
  styleUrls: ['./bg-dist.component.less']
})
export class BgDistComponent implements OnInit {

  @Input() dist: Dist;

  constructor(private distService: DistService) { }

  ngOnInit() {
  }

  isFurthest(): boolean {
    return this.dist === this.distService.distFurthest;
  }

}
