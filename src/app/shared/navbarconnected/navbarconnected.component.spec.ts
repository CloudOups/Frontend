import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarconnectedComponent } from './navbarconnected.component';

describe('NavbarconnectedComponent', () => {
  let component: NavbarconnectedComponent;
  let fixture: ComponentFixture<NavbarconnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarconnectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarconnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
