import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEventbackComponent } from './list-eventback.component';

describe('ListEventbackComponent', () => {
  let component: ListEventbackComponent;
  let fixture: ComponentFixture<ListEventbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEventbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEventbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
