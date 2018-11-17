export class Bubble {

  private _speed;

  constructor(public x: number,
              public y: number,
              public side: number) {
    this._speed = this.side / 500;
  }

  update() {
    this.side -= this._speed;
  }

}
