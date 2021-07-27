import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolingCategoriesComponent } from './cooling-categories.component';

describe('CoolingCategoriesComponent', () => {
  let component: CoolingCategoriesComponent;
  let fixture: ComponentFixture<CoolingCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolingCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolingCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
