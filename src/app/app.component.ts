import {Component, OnInit} from '@angular/core';
import {Bubble} from './model/bubble';

class Dist {
  dist?: number;
  constructor(public minX: number, public maxX: number, public minY: number, public maxY: number) {
  }
  getCol() {
    const col = this.dist * 1.5;
    return `rgb(${col},${col},${col})`;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _isGameOver = false;
  private _idLatest = 0;
  private _sideMax = 200;
  private _segments = 20;

  spaceW = 500;
  spaceH = 500;
  bubbles: Array<Bubble> = [];

  dists: Array<Array<Dist>> = [];
  distFurthest: Dist;

  constructor() {
    for (let j = 0; j < this._segments; j++) {
      const segHeight = this.spaceH / this._segments;
      const minY = j * segHeight;
      const maxY = minY + segHeight;
      for (let k = 0; k < this._segments; k++) {
        if (k === 0) {
          this.dists[j] = [];
        }
        const segWidth = this.spaceW / this._segments;
        const minX = k * segWidth;
        const maxX = minX + segWidth;
        this.dists[j][k] = new Dist(minX, maxX, minY, maxY);
      }
    }
  }

  ngOnInit() {
    this.createBubble();
  }

  died(e: Bubble) {
    console.log('game over', e);
    this._isGameOver = true;
  }

  killed(e: Bubble) {
    this.bubbles.splice(this.bubbles.indexOf(e), 1);
    this.createBubble();
    if (this.score % 10 === 0) {
      this.createBubble();
    }
  }

  isGameOver() {
    return this._isGameOver;
  }

  get score() {
    return this._idLatest - 1;
  }

  private createBubble() {
    const side = this._sideMax;
    const x = (side / 2) + Math.floor(Math.random() * (this.spaceW - side));
    const y = (side / 2) + Math.floor(Math.random() * (this.spaceH - side));
    const bubble = new Bubble(this._idLatest++, x, y, side);
    this.bubbles.push(bubble);
    this.distFurthest = this.calculateDists();
  }

  private calculateDists(): Dist {
    let distItemFurthest = null;
    this.dists.forEach(distRow => {
      distRow.forEach(dist => {
        const pointX = (dist.minX + dist.maxX) / 2;
        const pointY = (dist.minY + dist.maxY) / 2;
        const distEdgeX = Math.min(this.spaceW - pointX, pointX);
        const distEdgeY = Math.min(this.spaceH - pointY, pointY);
        let distBubbleMin = -1;
        this.bubbles.forEach(b => {
          const distBubbleX = Math.abs(b.x - pointX);
          const distBubbleY = Math.abs(b.y - pointY);
          const distBubble = Math.max(0, Math.sqrt((distBubbleX * distBubbleX) + (distBubbleY * distBubbleY)) - (b.side / 2));
          if (distBubbleMin === -1 || distBubble < distBubbleMin) {
            distBubbleMin = distBubble;
          }
        });
        dist.dist = Math.min(distBubbleMin, distEdgeY, distEdgeX);
        if (!distItemFurthest || dist.dist > distItemFurthest.dist) {
          distItemFurthest = dist;
        }
      });
    });
    return distItemFurthest;
  }

}
