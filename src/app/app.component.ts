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
  private _sideMin = 200;
  private _sideMax = 200;

  _spaceW = 500;
  _spaceH = 500;
  bubbles: Array<Bubble> = [];

  rangeMinX;
  rangeMaxX;
  rangeMinY;
  rangeMaxY;

  ngOnInit() {
    this.createBubble();
  }

  died(e: Bubble) {
    console.log('game over', e);
    this._isGameOver = true;
  }

  killed(e: Bubble) {
    this.calculateRemote();
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
    const side = this._sideMin + Math.floor(Math.random() * (this._sideMax - this._sideMin));
    const x = (side / 2) + Math.floor(Math.random() * (this._spaceW - side));
    const y = (side / 2) + Math.floor(Math.random() * (this._spaceH - side));
    const bubble = new Bubble(this._idLatest++, x, y, side);
    this.bubbles.push(bubble);
  }

  private calculateRemote() {
    this.rangeMinX = 0;
    this.rangeMaxX = this._spaceW;
    this.rangeMinY = 0;
    this.rangeMaxY = this._spaceH;
    for (let i = 0; i < 10; i++) {
      let rangeMinXNew, rangeMaxXNew, rangeMinYNew, rangeMaxYNew;
      let distMax = -1;
      for (let j = 0; j < 4; j++) {
        const blockMinX = (j % 2 === 0) ? this.rangeMinX : (this.rangeMinX + this.rangeMaxX) / 2;
        const blockMaxX = (j % 2 === 0) ? (this.rangeMinX + this.rangeMaxX) / 2 : this.rangeMaxX;
        const blockMinY = (j < 2) ? this.rangeMinY : (this.rangeMinY + this.rangeMaxY) / 2;
        const blockMaxY = (j < 2) ? (this.rangeMinY + this.rangeMaxY) / 2 : this.rangeMaxY;
        const pointX = (blockMinX + blockMaxX) / 2;
        const pointY = (blockMinY + blockMaxY) / 2;
        const distEdgeX = Math.min(this._spaceW - pointX, pointX);
        const distEdgeY = Math.min(this._spaceH - pointY, pointY);
        let distBubbleMin = -1;
        this.bubbles.forEach(b => {
          const distBubbleX = Math.abs(b.x - pointX);
          const distBubbleY = Math.abs(b.y - pointY);
          const distBubble = Math.max(0, Math.sqrt(distBubbleX * distBubbleX + distBubbleY * distBubbleY) - 200);
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
      this.rangeMinX = rangeMinXNew;
      this.rangeMaxX = rangeMaxXNew;
      this.rangeMinY = rangeMinYNew;
      this.rangeMaxY = rangeMaxYNew;
    }
  }

}
