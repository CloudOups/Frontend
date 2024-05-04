import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackAddProduitComponent } from './back-add-produit.component';

describe('BackAddProduitComponent', () => {
  let component: BackAddProduitComponent;
  let fixture: ComponentFixture<BackAddProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackAddProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackAddProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
