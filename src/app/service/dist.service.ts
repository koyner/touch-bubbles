import {Injectable} from '@angular/core';

import {Dist} from '../model/dist';
import {Bubble} from '../model/bubble';

@Injectable({
  providedIn: 'root'
})
export class DistService {

  private readonly _distDivisions = 20;

  dists: Array<Array<Dist>> = [];
  distFurthest: Dist;

  constructor() {
    for (let j = 0; j < this._distDivisions; j++) {
      const divH = 1 / this._distDivisions;
      const yMin = j * divH;
      const yMax = yMin + divH;
      for (let k = 0; k < this._distDivisions; k++) {
        if (k === 0) {
          this.dists[j] = [];
        }
        const divW = 1 / this._distDivisions;
        const xMin = k * divW;
        const xMax = xMin + divW;
        this.dists[j][k] = new Dist(xMin, xMax, yMin, yMax);
      }
    }
  }

  updateDistMatrix(bubbles: Array<Bubble>): void {
    let dFurthest = null;
    this.dists.forEach(dRow => {
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
        const distToEdgeX = Math.min(1 - x, x);
        const distToEdgeY = Math.min(1 - y, y);
        const distToEdge = Math.min(distToEdgeY, distToEdgeX);
        d.offset = distToBubble === -1 ? distToEdge : Math.min(distToBubble, distToEdge);
        if (!dFurthest || d.offset > dFurthest.offset) {
          dFurthest = d;
        }
      });
    });
    this.distFurthest = dFurthest;
  }
}
