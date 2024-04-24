import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackListProduitComponent } from './back-list-produit.component';

describe('BackListProduitComponent', () => {
  let component: BackListProduitComponent;
  let fixture: ComponentFixture<BackListProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackListProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackListProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
