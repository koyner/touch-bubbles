export class Bubble {

  private readonly _speed;

  constructor(public x: number,
              public y: number,
              public side: number) {
    this._speed = this.side / 500;
  }

  update(): void {
    this.side -= this._speed;
  }

}
