import {Injectable} from '@angular/core';

import {SettingsService} from '../settings/settings.service';

export interface Renderable {
  render: () => void;
}

@Injectable()
export class DrawService {
  private _isCanvasRendered = false;

  ctx: CanvasRenderingContext2D;
  renderables: Array<Renderable> = [];

  constructor(private settings: SettingsService) {}

  isCanvasReady(): boolean {
    return this.settings.canvasMode && this._isCanvasRendered;
  }

  update() {
    if (this.ctx && this.settings.canvasMode) {
      this.fillBlack(this.settings.trail ? this.settings.trailOpacity : 1);
      this.renderables.forEach(r => r.render());
      this._isCanvasRendered = true;
    } else if (this._isCanvasRendered) {
      this.fillBlack();
      this._isCanvasRendered = false;
    }
  }

  private fillBlack(opacity = 1) {
    this.ctx.globalAlpha = opacity;
    this.ctx.fillStyle = 'rgb(0, 0, 0)';
    this.ctx.fillRect(0, 0, this.settings.width, this.settings.height);
  }
}
