import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCategoriesCarouselComponent } from './products-categories-carousel.component';
import { ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [ProductsCategoriesCarouselComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductCategoriesCarousel: {
          component: ProductsCategoriesCarouselComponent
        }
      }
    })
  ]
})
export class ProductsCategoriesCarouselModule { }
