import {Component, OnInit} from '@angular/core';

import {MatSliderChange} from '@angular/material';
import {GameService} from '../../service/game.service';
import {BubbleService} from '../../service/bubble.service';
import {ConstantsService} from '../../service/constants.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.less']
})
export class StatusComponent implements OnInit {

  constructor(private gameService: GameService,
              private bubbleService: BubbleService,
              private constants: ConstantsService) {
  }

  ngOnInit() {
  }

  get bubbleCount() {
    return this.bubbleService.bubbles.length;
  }

  setRate(e: MatSliderChange): void {
    this.gameService.updateRate(5000 - e.value);
  }

  get speed(): number {
    return this.constants.speed * 1000;
  }

  setSpeed(e: MatSliderChange): void {
    this.constants.speed = e.value / 1000;
    this.bubbleService.bubbles.forEach(b => {
      b.speed = this.constants.speed;
    });
  }
}
