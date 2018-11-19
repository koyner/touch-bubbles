import {Inject, Injectable} from '@angular/core';
import {Bubble} from '../model/bubble';
import {BubbleService} from './bubble.service';
import {DistService} from './dist.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _isGameOver = false;
  private _score = 0;
  private _anim: number;

  constructor(@Inject('Window') private window: Window,
              private bubbleService: BubbleService,
              private distService: DistService) {
  }

  start() {
    this.bubbleService.create();
    this._anim = this.window.setInterval(this.update, 25);
  }

  update = () => {
    if (!this.bubbleService.update()) {
      this.end();
    } else {
      this.distService.updateDistMatrix(this.bubbleService.bubbles);
    }
  }

  kill(b: Bubble) {
    this._score++;
    this.bubbleService.remove(b);
    this.bubbleService.create();
    if (this.score % 5 === 0) {
      this.bubbleService.create();
    }
  }

  end() {
    this.window.clearInterval(this._anim);
    this._isGameOver = true;
  }

  isOver() {
    return this._isGameOver;
  }

  get score() {
    return this._score;
  }

}
