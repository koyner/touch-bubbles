import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Bubble} from '../model/bubble';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.less']
})
export class BubbleComponent {

  @Input() bubble: Bubble;
  @Input() isGameOver: boolean;
  @Output() killed: EventEmitter<Bubble> = new EventEmitter();

  get x(): number {
    return this.bubble.x - this.bubble.side / 2;
  }

  get y(): number {
    return this.bubble.y - this.bubble.side / 2;
  }

  get side(): number {
    return this.bubble.side;
  }

  get col(): string {
    if (this.bubble.side > 120) {
      return '#00FF00';
    } else if (this.bubble.side > 60) {
      return '#FFFF00';
    } else {
      return '#FF0000';
    }
  }

  clicked(): void {
    if (!this.isGameOver) {
      this.killed.emit(this.bubble);
    }
  }

}
