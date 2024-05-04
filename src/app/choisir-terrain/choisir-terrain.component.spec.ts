import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoisirTerrainComponent } from './choisir-terrain.component';

describe('ChoisirTerrainComponent', () => {
  let component: ChoisirTerrainComponent;
  let fixture: ComponentFixture<ChoisirTerrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoisirTerrainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoisirTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
