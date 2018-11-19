import {Injectable} from '@angular/core';
import {Bubble} from '../model/bubble';
import {DistService} from './dist.service';
import {Dist} from '../model/dist';

@Injectable({
  providedIn: 'root'
})
export class BubbleService {

  bubbles: Array<Bubble> = [];

  constructor(private distService: DistService) {
  }

  create(): void {
    const side = this.dFurthest ?
      this.dFurthest.offset * 2 : 200;
    const x = this.dFurthest ?
      (this.dFurthest.xMin + this.dFurthest.xMax) / 2 :
      (side / 2) + Math.floor(Math.random() * (this.distService.winW - side));
    const y = this.dFurthest ?
      (this.dFurthest.yMin + this.dFurthest.yMax) / 2 :
      (side / 2) + Math.floor(Math.random() * (this.distService.winH - side));
    const bubble = new Bubble(x, y, side);
    this.bubbles.push(bubble);
    this.distService.updateDistMatrix(this.bubbles);
  }

  remove(b: Bubble): void {
    this.bubbles.splice(this.bubbles.indexOf(b), 1);
  }

  update(): boolean {
    let isAlive = true;
    this.bubbles.forEach(b => {
      b.update();
      if (b.side < 0) {
        isAlive = false;
      }
    });
    return isAlive;
  }

  private get dFurthest(): Dist {
    return this.distService.distFurthest;
  }
}
