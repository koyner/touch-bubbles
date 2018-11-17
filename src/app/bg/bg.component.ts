import {Component, Input, OnInit} from '@angular/core';

import {Dist} from '../model/dist';

@Component({
  selector: 'app-bg',
  templateUrl: './bg.component.html',
  styleUrls: ['./bg.component.less']
})
export class BgComponent implements OnInit {

  @Input() dAll: Array<Array<Dist>>;
  @Input() dFurthest: Dist;

  constructor() { }

  ngOnInit() {
  }

}
