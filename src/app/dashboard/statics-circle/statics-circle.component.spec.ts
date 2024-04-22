import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticsCircleComponent } from './statics-circle.component';

describe('StaticsCircleComponent', () => {
  let component: StaticsCircleComponent;
  let fixture: ComponentFixture<StaticsCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticsCircleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticsCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
