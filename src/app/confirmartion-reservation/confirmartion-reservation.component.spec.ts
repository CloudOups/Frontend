import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmartionReservationComponent } from './confirmartion-reservation.component';

describe('ConfirmartionReservationComponent', () => {
  let component: ConfirmartionReservationComponent;
  let fixture: ComponentFixture<ConfirmartionReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmartionReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmartionReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
