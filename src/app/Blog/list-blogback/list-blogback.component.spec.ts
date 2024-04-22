import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBlogbackComponent } from './list-blogback.component';

describe('ListBlogbackComponent', () => {
  let component: ListBlogbackComponent;
  let fixture: ComponentFixture<ListBlogbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBlogbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBlogbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
