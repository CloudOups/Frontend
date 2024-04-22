import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticsBarsHComponent } from './statics-bars-h.component';

describe('StaticsBarsHComponent', () => {
  let component: StaticsBarsHComponent;
  let fixture: ComponentFixture<StaticsBarsHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticsBarsHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticsBarsHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
