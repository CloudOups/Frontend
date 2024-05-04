import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTournoiComponent } from './add-tournoi.component';

describe('AddTournoiComponent', () => {
  let component: AddTournoiComponent;
  let fixture: ComponentFixture<AddTournoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTournoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTournoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
