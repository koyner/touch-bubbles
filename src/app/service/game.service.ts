import {Inject, Injectable} from '@angular/core';

import {BubbleService} from './bubble.service';
import {DistService} from './dist.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(@Inject('Window') private window: Window,
              private bubbleService: BubbleService,
              private distService: DistService) {
  }

  start(): void {
    this.bubbleService.create();
    this.distService.updateDistMatrix(this.bubbleService.bubbles);
    this.window.setInterval(this.update, 20);
  }

  update = (): void => {
    if (Date.now() - this.bubbleService.tLastCreated > 500) {
      this.bubbleService.create();
    }
    this.bubbleService.update();
    this.distService.updateDistMatrix(this.bubbleService.bubbles);
  }

}
