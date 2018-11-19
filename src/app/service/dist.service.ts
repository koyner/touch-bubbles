import {Injectable} from '@angular/core';
import {Dist} from '../model/dist';

@Injectable({
  providedIn: 'root'
})
export class DistService {

  private readonly _dDivs = 20;

  winW = 500;
  winH = 500;

  dAll: Array<Array<Dist>> = [];
  dFurthest: Dist;

  constructor() {
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

  updateDistMatrix(bubbles) {
    let dFurthest = null;
    this.dAll.forEach(dRow => {
      dRow.forEach(d => {
        const x = (d.xMin + d.xMax) / 2;
        const y = (d.yMin + d.yMax) / 2;
        let distToBubble = -1;
        bubbles.forEach(b => {
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
