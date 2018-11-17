import {Component, Inject, OnInit} from '@angular/core';

import {Bubble} from './model/bubble';
import {Dist} from './model/dist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  private readonly _dDivs = 20;

  private _anim: number;
  private _isGameOver = false;
  private _score = 0;

  winW = 500;
  winH = 500;
  bubbles: Array<Bubble> = [];

  dAll: Array<Array<Dist>> = [];
  dFurthest: Dist;

  constructor(@Inject('Window') private window: Window) {
    for (let j = 0; j < this._dDivs; j++) {
      const divH = this.winH / this._dDivs;
      const yMin = j * divH;
      const yMax = yMin + divH;
      for (let k = 0; k < this._dDivs; k++) {
        if (k === 0) {
          this.dAll[j] = [];
        }
        const divW = this.winW / this._dDivs;
        const xMin = k * divW;
        const xMax = xMin + divW;
        this.dAll[j][k] = new Dist(xMin, xMax, yMin, yMax);
      }
    }
  }

  ngOnInit() {
    this.gameStart();
  }

  killed(e: Bubble) {
    this._score++;
    this.bubbles.splice(this.bubbles.indexOf(e), 1);
    this.createBubble();
    if (this.score % 5 === 0) {
      this.createBubble();
    }
  }

  isGameOver() {
    return this._isGameOver;
  }

  get score() {
    return this._score;
  }

  private gameStart() {
    this.createBubble();
    this._anim = this.window.setInterval(this.update, 25);
  }

  private gameEnd() {
    this.window.clearInterval(this._anim);
    this._isGameOver = true;
  }

  private update = () => {
    this.bubbles.forEach(b => {
      b.update();
      if (b.side < 0) {
        this.gameEnd();
      }
    });
    this.updateDistMatrix();
  }

  private createBubble() {
    const side = this.dFurthest ?
      this.dFurthest.dist * 2 : 200;
    const x = this.dFurthest ?
      (this.dFurthest.xMin + this.dFurthest.xMax) / 2 :
      (side / 2) + Math.floor(Math.random() * (this.winW - side));
    const y = this.dFurthest ?
      (this.dFurthest.yMin + this.dFurthest.yMax) / 2 :
      (side / 2) + Math.floor(Math.random() * (this.winH - side));
    const bubble = new Bubble(x, y, side);
    this.bubbles.push(bubble);
    this.updateDistMatrix();
  }

  private updateDistMatrix() {
    let dFurthest = null;
    this.dAll.forEach(dRow => {
      dRow.forEach(d => {
        const x = (d.xMin + d.xMax) / 2;
        const y = (d.yMin + d.yMax) / 2;
        let distToBubble = -1;
        this.bubbles.forEach(b => {
          const dX = Math.abs(b.x - x);
          const dY = Math.abs(b.y - y);
          const distToBubbleCurrent = Math.max(0, Math.sqrt((dX * dX) + (dY * dY)) - (b.side / 2));
          if (distToBubble === -1 || distToBubbleCurrent < distToBubble) {
            distToBubble = distToBubbleCurrent;
          }
        });
        const distToEdgeX = Math.min(this.winW - x, x);
        const distToEdgeY = Math.min(this.winH - y, y);
        d.dist = Math.min(distToBubble, distToEdgeY, distToEdgeX);
        if (!dFurthest || d.dist > dFurthest.dist) {
          dFurthest = d;
        }
      });
    });
    this.dFurthest = dFurthest;
  }

}
