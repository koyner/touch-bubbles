import {Component, Inject, OnInit} from '@angular/core';
import {Bubble} from './model/bubble';

class Dist {
  dist?: number;
  constructor(public minX: number, public maxX: number, public minY: number, public maxY: number) {
  }
  getCol() {
    const col = this.dist * 1.3;
    return `rgb(${col},${col},${col})`;
  }
  get x() {
    return (this.minX + this.maxX) / 2;
  }
  get y() {
    return (this.minY + this.maxY) / 2;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _anim: number;
  private _isGameOver = false;
  private _score = 0;
  private _segments = 20;

  spaceW = 500;
  spaceH = 500;
  bubbles: Array<Bubble> = [];

  dists: Array<Array<Dist>> = [];
  distFurthest: Dist;

  constructor(@Inject('Window') private window: Window) {
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
    this.calculateDists();
  }

  private createBubble() {
    // const side = this._sideMin + (Math.random() * (this._sideMax - this._sideMin));
    const side = this.distFurthest ?
      this.distFurthest.dist * 2 : 200;
    const x = this.distFurthest ?
      (this.distFurthest.minX + this.distFurthest.maxX) / 2 : (side / 2) + Math.floor(Math.random() * (this.spaceW - side));
    const y = this.distFurthest ?
      (this.distFurthest.minY + this.distFurthest.maxY) / 2 : (side / 2) + Math.floor(Math.random() * (this.spaceH - side));
    const bubble = new Bubble(x, y, side);
    this.bubbles.push(bubble);
    this.calculateDists();
  }

  private calculateDists() {
    let distFurthest = null;
    this.dists.forEach(distRow => {
      distRow.forEach(dist => {
        const distX = (dist.minX + dist.maxX) / 2;
        const distY = (dist.minY + dist.maxY) / 2;
        const distEdgeX = Math.min(this.spaceW - distX, distX);
        const distEdgeY = Math.min(this.spaceH - distY, distY);
        let distBubbleMin = -1;
        this.bubbles.forEach(b => {
          const distBubbleX = Math.abs(b.x - distX);
          const distBubbleY = Math.abs(b.y - distY);
          const distBubble = Math.max(0, Math.sqrt((distBubbleX * distBubbleX) + (distBubbleY * distBubbleY)) - (b.side / 2));
          if (distBubbleMin === -1 || distBubble < distBubbleMin) {
            distBubbleMin = distBubble;
          }
        });
        dist.dist = Math.min(distBubbleMin, distEdgeY, distEdgeX);
        if (!distFurthest || dist.dist > distFurthest.dist) {
          distFurthest = dist;
        }
      });
    });
    this.distFurthest = distFurthest;
  }

}
