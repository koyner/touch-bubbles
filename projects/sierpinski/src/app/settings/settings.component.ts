import {Component, OnInit} from '@angular/core';
import {MatSliderChange} from '@angular/material/slider';

import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

import {AnimateService} from '../animate/animate.service';

import {SettingsService} from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less'],
})
export class SettingsComponent implements OnInit {
  isOpen = false;

  constructor(
    public settings: SettingsService,
    public animate: AnimateService,
  ) {}

  updateArmsHandler: (event: MatSliderChange) => void;

  close() {
    this.isOpen = false;
  }

  open() {
    this.isOpen = true;
  }

  ngOnInit() {
    this.createArms();
    this.armsCountUpdates().subscribe(armsCount => {
      this.settings.armsCount = armsCount;
      this.createArms();
    });
  }

  // Get an observable that reacts to changes to the arms count slider, with a debounce time of 500ms.
  // We need debounce because updating the arms count triggers a lot of new calculations.
  private armsCountUpdates(): Observable<number> {
    return new Observable<number>(observer => {
      this.updateArmsHandler = (event: MatSliderChange) => {
        observer.next(event.source.value);
      };
    }).pipe(
      distinctUntilChanged(),
      debounceTime(this.settings.armsCountDebounce),
    );
  }

  private createArms() {
    this.settings.arms = [];
    let i = 0;
    while (i < this.settings.armsCount) {
      this.settings.arms[i] = i++;
    }
  }
}
