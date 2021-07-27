import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingCategoriesComponent } from './cooking-categories.component';

describe('CookingCategoriesComponent', () => {
  let component: CookingCategoriesComponent;
  let fixture: ComponentFixture<CookingCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookingCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
