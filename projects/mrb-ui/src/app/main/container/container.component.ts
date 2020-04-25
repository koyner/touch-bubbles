import {Component, Inject, InjectionToken, OnInit} from '@angular/core';

export const WINDOW = new InjectionToken('Window');
export function _window() {
  return window;
}

/** @dynamic */
@Component({
  selector: 'app-mrb-ui-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less'],
  providers: [{provide: WINDOW, useFactory: _window}],
})
export class ContainerComponent implements OnInit {
  scale: number;
  constructor(@Inject(WINDOW) private window: Window) {}

  ngOnInit(): void {
    this.resize();
  }

  onResize() {
    this.resize();
  }

  get left(): number {
    return (this.winW - this.side) / 2;
  }

  get top(): number {
    return (this.winH - this.side) / 2;
  }

  get side(): number {
    return this.scale;
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
