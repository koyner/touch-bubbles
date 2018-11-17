import {Component, Input, OnInit} from '@angular/core';

import {Dist} from '../model/dist';

@Component({
  selector: 'app-bg-disc',
  templateUrl: './bg-disc.component.html',
  styleUrls: ['./bg-disc.component.less']
})
export class BgDiscComponent implements OnInit {

  @Input() d: Dist;
  @Input() isFurthest: boolean;

  constructor() { }

  ngOnInit() {
  }

}
