import {Component, OnInit} from '@angular/core';

import {Bubble} from '../../model/bubble';
import {BubbleService} from '../../service/bubble.service';

@Component({
  selector: 'app-bubbles',
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.less'],
})
export class BubblesComponent implements OnInit {
  constructor(private bubbleService: BubbleService) {}

  ngOnInit() {}

  get bubbles(): Bubble[] {
    return this.bubbleService.bubbles;
  }
}
