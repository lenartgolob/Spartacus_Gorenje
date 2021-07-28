import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishwashersCategoriesComponent } from './dishwashers-categories.component';

describe('DishwashersCategoriesComponent', () => {
  let component: DishwashersCategoriesComponent;
  let fixture: ComponentFixture<DishwashersCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishwashersCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishwashersCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
