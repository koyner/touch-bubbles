import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import {DrawService} from './draw/draw.service';
import {AnimateService} from './animate/animate.service';
import {SettingsService} from './settings/settings.service';

@Component({
  styleUrls: ['app.component.less'],
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('appCanvas', {static: false}) canvasRef: ElementRef;
  @ViewChild('appNodes', {static: false}) nodesRef: ElementRef;

  constructor(
    private animate: AnimateService,
    public settings: SettingsService,
    public draw: DrawService,
  ) {}

  ngOnInit() {
    this.animate.start();
  }

  ngAfterViewInit() {
    this.draw.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.resize();
  }

  resize() {
    const box: ClientRect = this.nodesRef.nativeElement.getBoundingClientRect();
    Promise.resolve().then(() => {
      this.settings.width = box.width;
      this.settings.height = box.height;
    });
  }
}
