import {Inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  side: number;

  constructor(@Inject('Window') window: Window) {
    this.resize();
  }

  resize() {
    this.side = Math.min(this.winW, this.winH) - 20;
  }

  get winW() {
    return window.innerWidth;
  }

  get winH() {
    return window.innerHeight;
  }
}
