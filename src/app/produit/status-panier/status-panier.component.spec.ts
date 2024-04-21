import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPanierComponent } from './status-panier.component';

describe('StatusPanierComponent', () => {
  let component: StatusPanierComponent;
  let fixture: ComponentFixture<StatusPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusPanierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
