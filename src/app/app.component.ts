import {Component, Inject, OnInit} from '@angular/core';

import {Bubble} from './model/bubble';
import {GameService} from './service/game.service';
import {BubbleService} from './service/bubble.service';
import {DistService} from './service/dist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  winW = 500;
  winH = 500;

  constructor(@Inject('Window') private window: Window,
              private distService: DistService,
              private bubbleService: BubbleService,
              private gameService: GameService) {
  }

  ngOnInit() {
    this.gameService.start();
  }

  killed(e: Bubble) {
    this.gameService.kill(e);
  }

  isGameOver() {
    return this.gameService.isOver();
  }

  get score() {
    return this.gameService.score;
  }

  get bubbles() {
    return this.bubbleService.bubbles;
  }

  get dAll() {
    return this.distService.dAll;
  }

  get dFurthest() {
    return this.distService.dFurthest;
  }

}
