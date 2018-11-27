import {Component, Input} from '@angular/core';
import {Bubble} from '../../model/bubble';
import {GameService} from '../../service/game.service';
import {ConstantsService} from '../../service/constants.service';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.less']
})
export class BubbleComponent {

  @Input() bubble: Bubble;

  constructor(private gameService: GameService,
              private constants: ConstantsService) {
  }

  get x(): number {
    return (this.bubble.x - this.bubble.side / 2) * this.constants.side;
  }

  get y(): number {
    return (this.bubble.y - this.bubble.side / 2) * this.constants.side;
  }

  get side(): number {
    return this.bubble.side * this.constants.side;
  }

  get borderCol(): string {
    return `hsl(${this.hue}, 100%, 50%)`;
  }

  get bgCol(): string {
    return `hsl(${this.hue}, 60%, 50%)`;
  }

  get borderSize(): number {
    return this.side / 20;
  }

  clicked(): void {
    this.bubble.reverse();
  }

  private get hue(): number {
    return this.bubble.side * 360;
  }

}
