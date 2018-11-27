import {Component, OnInit} from '@angular/core';

import {GameService} from './service/game.service';
import {ConstantsService} from './service/constants.service';
import {BubbleService} from './service/bubble.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  constructor(private gameService: GameService,
              private bubbleService: BubbleService,
              private constants: ConstantsService) {
  }

  ngOnInit(): void {
    this.gameService.start();
  }

  onResize() {
    this.constants.resize();
  }

  get bubbleCount() {
    return this.bubbleService.bubbles.length;
  }

  get left(): number {
    return (this.constants.winW - this.side) / 2;
  }

  get top(): number {
    return (this.constants.winH - this.side) / 2;
  }

  get side(): number {
    return this.constants.side;
  }

}
