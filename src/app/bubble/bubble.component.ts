import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Bubble} from '../model/bubble';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent implements OnInit {


  private _anim: number;

  side: number;

  @Input() bubble: Bubble;
  @Input() isGameOver: boolean;
  @Output() killed: EventEmitter<Bubble> = new EventEmitter();
  @Output() died: EventEmitter<Bubble> = new EventEmitter();

  constructor(@Inject('Window') private window: Window) {
  }

  ngOnInit(): void {
    this.side = this.bubble.side;
    this.start();
  }

  get xPos(): number {
    return this.bubble.x - this.side / 2;
  }

  get yPos(): number {
    return this.bubble.y - this.side / 2;
  }

  get bgCol(): string {
    if (this.side > 150) {
      return '#00FF00';
    } else if (this.side > 75) {
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

  private update = () => {
    if (this.isGameOver) {
      this.stop();
    } else {
      this.side -= 1;
      if (this.side <= 0) {
        this.died.emit(this.bubble);
        this.stop();
      }
    }
  };

  private start() {
    this._anim = this.window.setInterval(this.update, 30);
  }

  private stop() {
    this.window.clearInterval(this._anim);
  }

}
