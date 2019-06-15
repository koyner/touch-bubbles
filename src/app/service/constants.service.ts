import {Inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  scale: number;
  speed = 0.002;

  constructor(@Inject('Window') private window: Window) {
    this.resize();
  }

  resize() {
    this.scale = Math.min(this.winW, this.winH) - 20;
  }

  get winW() {
    return this.window.innerWidth;
  }

  get winH() {
    return this.window.innerHeight;
  }

}
