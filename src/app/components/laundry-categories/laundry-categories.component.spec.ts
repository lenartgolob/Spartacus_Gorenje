import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaundryCategoriesComponent } from './laundry-categories.component';

describe('LaundryCategoriesComponent', () => {
  let component: LaundryCategoriesComponent;
  let fixture: ComponentFixture<LaundryCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaundryCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaundryCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
