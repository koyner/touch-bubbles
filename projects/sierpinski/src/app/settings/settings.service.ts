import {Injectable} from '@angular/core';

@Injectable()
export class SettingsService {
  // Dimenstions of main app element
  width = 0;
  height = 0;

  // How many arms does each node have
  armsCount = 3;
  armsCountMin = 1;
  armsCountMax = 5;
  armsCountStep = 1;
  armsCountDebounce = 500;

  // The arms themselves
  arms: Array<number>;

  // Number of node levels
  _levels = 7;
  get levels(): number {
    return this._levels;
  }
  set levels(l: number) {
    this._levels = l;
    this.hideLevels = Math.min(this.hideLevels, this._levels - 1);
  }
  levelsMin = 1;
  levelsMax = 8;
  levelsStep = 1;

  // Number of node levels to hide
  hideLevels = 1;
  hideLevelsMin = 0;
  get hideLevelsMax(): number {
    return this.levels - 1;
  }
  hideLevelsStep = 1;

  // Size of nodes in pixels
  size = 10;
  sizeMin = 1;
  sizeMax = 50;
  sizeStep = 0.1;

  // Speed of nodes
  speed = 300;
  speedMin = 0;
  speedMax = 1000;
  speedStep = 1;

  // Factor by which lower levels move faster than parent levels
  accel = 2;
  accelMin = 1;
  accelMax = 3;
  accelStep = 0.1;

  // Whether we are rendering to the canvas, or using the dom
  canvasMode = true;

  // Filled or outlined nodes
  solid = true;

  // Opaque or solid nodes
  opaque = false;

  // Colourful or plain white nodes
  colourful = true;

  // Show squares or circles
  circles = true;

  // Whether to alternate arm directions at each level
  alternate = true;

  // Show node trails or not
  _trail = true;
  get trail(): boolean {
    return this.canvasMode ? this._trail : false;
  }
  set trail(t: boolean) {
    this._trail = t;
  }

  // The trail's opacity (and thus its length)
  trailOpacity = 0.1;

  // Whether to show connecting lines
  _lines = false;
  get lines(): boolean {
    return this.canvasMode ? this._lines : false;
  }
  set lines(l: boolean) {
    this._lines = l;
  }

  // How often FPS is calcualted, ms
  fpsUpdateRate = 1000;

  // typical ideal FPS
  fpsIdeal = 60;

  // The minimum frame-rate allowed before we automatically reduce the levels.
  fpsMin = 4;
}
