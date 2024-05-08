import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeEquipeComponent } from './demande-equipe.component';

describe('DemandeEquipeComponent', () => {
  let component: DemandeEquipeComponent;
  let fixture: ComponentFixture<DemandeEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeEquipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
