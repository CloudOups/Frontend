import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailtournoiComponent } from './detailtournoi.component';

describe('DetailtournoiComponent', () => {
  let component: DetailtournoiComponent;
  let fixture: ComponentFixture<DetailtournoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailtournoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailtournoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
