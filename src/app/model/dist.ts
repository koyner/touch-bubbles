export class Dist {

  dist?: number;

  constructor(public xMin: number,
              public xMax: number,
              public yMin: number,
              public yMax: number) {
  }

  get col(): string {
    const col = this.dist * 1.5;
    return `rgb(${col},${col},${col})`;
  }

  get x(): number {
    return (this.xMin + this.xMax) / 2;
  }

  get y(): number {
    return (this.yMin + this.yMax) / 2;
  }

  get w(): number {
    return this.xMax - this.xMin;
  }

  get h(): number {
    return this.yMax - this.yMin;
  }
}

