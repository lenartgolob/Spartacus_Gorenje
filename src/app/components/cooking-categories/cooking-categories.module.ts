import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookingCategoriesComponent } from './cooking-categories.component';
import { ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [CookingCategoriesComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CookingCategoriesComponent: {
          component: CookingCategoriesComponent
        }
      }
    })
  ]
})
export class CookingCategoriesModule { }
