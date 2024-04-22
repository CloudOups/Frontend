import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticsBarsVComponent } from './statics-bars-v.component';

describe('StaticsBarsVComponent', () => {
  let component: StaticsBarsVComponent;
  let fixture: ComponentFixture<StaticsBarsVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticsBarsVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticsBarsVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
