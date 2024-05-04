import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTournoiComponent } from './list-tournoi.component';

describe('ListTournoiComponent', () => {
  let component: ListTournoiComponent;
  let fixture: ComponentFixture<ListTournoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTournoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTournoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
