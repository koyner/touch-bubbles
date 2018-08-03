export class Bubble {

  constructor(public x: number,
              public y: number,
              public side: number) {
  }

  update() {
    this.side--;
  }

}
