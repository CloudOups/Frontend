import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationHistoryComponent } from './participation-history.component';

describe('ParticipationHistoryComponent', () => {
  let component: ParticipationHistoryComponent;
  let fixture: ComponentFixture<ParticipationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipationHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
