import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVerticaleComponent } from './form-verticale.component';

describe('FormVerticaleComponent', () => {
  let component: FormVerticaleComponent;
  let fixture: ComponentFixture<FormVerticaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVerticaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormVerticaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
