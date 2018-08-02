import {Component, OnInit} from '@angular/core';
import {Bubble} from './model/bubble';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _isGameOver = false;
  private _idLatest = 0;
  private _sideMax = 200;

  _spaceW = 500;
  _spaceH = 500;
  bubbles: Array<Bubble> = [];

  range: {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
    dist: number;
  };

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
    const x = (side / 2) + Math.floor(Math.random() * (this._spaceW - side));
    const y = (side / 2) + Math.floor(Math.random() * (this._spaceH - side));
    const bubble = new Bubble(this._idLatest++, x, y, side);
    this.bubbles.push(bubble);
    this.range = this.calculateRemote();
  }

  get rangeWidth() {
    return this.range.maxX - this.range.minX;
  }

  get rangeHeight() {
    return this.range.maxY - this.range.minY;
  }

  private calculateRemote() {
    const iterations = 3;
    const segments = 5;
    const range = {
      minX: 0,
      maxX: this._spaceW,
      minY: 0,
      maxY: this._spaceH,
      dist: 0
    };
    for (let i = 0; i < iterations; i++) {
      let rangeMinXNew, rangeMaxXNew, rangeMinYNew, rangeMaxYNew;
      let distMax = -1;
      for (let j = 0; j < segments; j++) {
        const segHeight = (range.maxY - range.minY) / segments;
        const blockMinY = range.minY + (j * segHeight);
        const blockMaxY = blockMinY + segHeight;
        for (let k = 0; k < segments; k++) {
          const segWidth = (range.maxX - range.minX) / segments;
          const blockMinX = range.minX + (k * segWidth);
          const blockMaxX = blockMinX + segWidth;
          const pointX = (blockMinX + blockMaxX) / 2;
          const pointY = (blockMinY + blockMaxY) / 2;
          const distEdgeX = Math.min(this._spaceW - pointX, pointX);
          const distEdgeY = Math.min(this._spaceH - pointY, pointY);
          let distBubbleMin = -1;
          this.bubbles.forEach(b => {
            const distBubbleX = Math.abs(b.x - pointX);
            const distBubbleY = Math.abs(b.y - pointY);
            const distBubble = Math.max(0, Math.sqrt((distBubbleX * distBubbleX) + (distBubbleY * distBubbleY)) - (b.side / 2));
            if (distBubbleMin === -1 || distBubble < distBubbleMin) {
              distBubbleMin = distBubble;
            }
          });
          const distAllMin = Math.min(distBubbleMin, distEdgeY, distEdgeX);
          if (distAllMin > distMax) {
            distMax = distAllMin;
            rangeMinXNew = blockMinX;
            rangeMaxXNew = blockMaxX;
            rangeMinYNew = blockMinY;
            rangeMaxYNew = blockMaxY;
          }
        }
      }
      range.minX = rangeMinXNew;
      range.maxX = rangeMaxXNew;
      range.minY = rangeMinYNew;
      range.maxY = rangeMaxYNew;
      range.dist = distMax;
    }
    return range;
  }

}
