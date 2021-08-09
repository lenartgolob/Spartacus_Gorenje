import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCategoriesCarouselComponent } from './products-categories-carousel.component';

describe('ProductsCategoriesCarouselComponent', () => {
  let component: ProductsCategoriesCarouselComponent;
  let fixture: ComponentFixture<ProductsCategoriesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsCategoriesCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCategoriesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
