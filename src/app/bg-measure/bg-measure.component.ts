import {Component, Input, OnInit} from '@angular/core';

import {Dist} from '../model/dist';

@Component({
  selector: 'app-bg-measure',
  templateUrl: './bg-measure.component.html',
  styleUrls: ['./bg-measure.component.less']
})
export class BgMeasureComponent implements OnInit {

  @Input() dFurthest: Dist;

  constructor() { }

  ngOnInit() {
  }

}
