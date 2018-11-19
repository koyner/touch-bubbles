import {Component, Inject, OnInit} from '@angular/core';

import {GameService} from './service/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  winW = 500;
  winH = 500;

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameService.start();
  }

  isGameOver(): boolean {
    return this.gameService.isOver();
  }

  get score(): number {
    return this.gameService.score;
  }

}
