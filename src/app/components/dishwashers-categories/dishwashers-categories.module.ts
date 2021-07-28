import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishwashersCategoriesComponent } from './dishwashers-categories.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [DishwashersCategoriesComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        DishwashersCategoriesComponent: {
          component: DishwashersCategoriesComponent
        }
      }
    } as CmsConfig)
  ]
})
export class DishwashersCategoriesModule { }
