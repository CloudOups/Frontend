import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarProduitComponent } from './navbar-produit.component';

describe('NavbarProduitComponent', () => {
  let component: NavbarProduitComponent;
  let fixture: ComponentFixture<NavbarProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
