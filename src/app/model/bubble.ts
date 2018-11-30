export class Bubble {

  private _reverse = false;

  constructor(public x: number,
              public y: number,
              public speed: number,
              public side: number) {
  }

  update(): void {
    this.side -= this._reverse ? 0 : this.speed;
  }

  reverse(): void {
    this._reverse = !this._reverse;
  }

}
