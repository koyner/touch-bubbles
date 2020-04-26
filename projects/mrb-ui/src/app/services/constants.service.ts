import {Inject, Injectable, InjectionToken} from '@angular/core';

export const WINDOW = new InjectionToken('Window');

/** @dynamic */
@Injectable()
export class ConstantsService {
  scale: number;
  speed = 0.002;

  constructor(@Inject(WINDOW) private window: Window) {
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
