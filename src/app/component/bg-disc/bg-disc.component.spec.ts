import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgDiscComponent } from './bg-disc.component';

describe('BgDiscComponent', () => {
  let component: BgDiscComponent;
  let fixture: ComponentFixture<BgDiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgDiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgDiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
