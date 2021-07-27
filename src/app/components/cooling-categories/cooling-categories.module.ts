import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoolingCategoriesComponent } from './cooling-categories.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [CoolingCategoriesComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CoolingCategoriesComponent: {
          component: CoolingCategoriesComponent
        }
      }
    } as CmsConfig)
  ]
})
export class CoolingCategoriesModule { }
