import {Injectable} from '@angular/core';

export interface IReceivesFrames {
  receiveFrame: () => void;
}

@Injectable()
export class TimerService {
  private frameReceivers: IReceivesFrames[];

  public registerFrameReceiver(rf: IReceivesFrames): void {
    this.frameReceivers.push(rf);
  }

  constructor() {
    let getNextFrame: () => void;
    let timePrev: number;

    this.frameReceivers = [];

    const handleNextFrame = (time: number): void => {
      const timeDiff = timePrev !== undefined ? time - timePrev : -1;
      console.log('time:', time, 'timePrev:', timePrev, 'diff:', timeDiff);
      timePrev = time;
      for (const r of this.frameReceivers) {
        r.receiveFrame();
      }
      getNextFrame();
    };

    getNextFrame = (): void => {
      window.requestAnimationFrame(handleNextFrame);
    };
    getNextFrame();
  }
}
