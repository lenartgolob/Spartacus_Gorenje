import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookingCategoriesComponent } from './cooking-categories.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';



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
    } as CmsConfig)
  ]
})
export class CookingCategoriesModule { }
