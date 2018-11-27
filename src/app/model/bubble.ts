export class Bubble {

  private _speed: number;
  private _reverse = false;

  constructor(public x: number,
              public y: number,
              public side: number) {
    this._speed = 0.001 + Math.random() * 0.003;
  }

  update(): void {
    this.side -= this._reverse ? 0 : this._speed;
  }

  reverse(): void {
    this._reverse = !this._reverse;
  }

}
