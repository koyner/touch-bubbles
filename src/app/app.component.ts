import {Component, OnInit} from '@angular/core';

import {ConstantsService} from './service/constants.service';
import {GameService} from './service/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  constructor(
    private gameService: GameService,
    private constants: ConstantsService,
  ) {}

  ngOnInit(): void {
    this.gameService.start();
  }

  onResize() {
    this.constants.resize();
  }

  get left(): number {
    return (this.constants.winW - this.side) / 2;
  }

  get top(): number {
    return (this.constants.winH - this.side) / 2;
  }

  get side(): number {
    return this.constants.scale;
  }
}
