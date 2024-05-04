import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackDetailProduitComponent } from './back-detail-produit.component';

describe('BackDetailProduitComponent', () => {
  let component: BackDetailProduitComponent;
  let fixture: ComponentFixture<BackDetailProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackDetailProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackDetailProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
