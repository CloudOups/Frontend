import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierEventsComponent } from './calendrier-events.component';

describe('CalendrierEventsComponent', () => {
  let component: CalendrierEventsComponent;
  let fixture: ComponentFixture<CalendrierEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendrierEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendrierEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
