import {Component, OnInit} from '@angular/core';

import {BubbleService} from '../../service/bubble.service';
import {Bubble} from '../../model/bubble';

@Component({
  selector: 'app-bubbles',
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.less']
})
export class BubblesComponent implements OnInit {

  constructor(private bubbleService: BubbleService) {
  }

  ngOnInit() {
  }

  get bubbles(): Array<Bubble> {
    return this.bubbleService.bubbles;
  }

}
