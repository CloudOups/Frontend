import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListterrainfrontComponent } from './listterrainfront.component';

describe('ListterrainfrontComponent', () => {
  let component: ListterrainfrontComponent;
  let fixture: ComponentFixture<ListterrainfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListterrainfrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListterrainfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
