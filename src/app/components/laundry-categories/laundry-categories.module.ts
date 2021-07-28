import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaundryCategoriesComponent } from './laundry-categories.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [LaundryCategoriesComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        LaundryCategoriesComponent: {
          component: LaundryCategoriesComponent
        } 
      }
    } as CmsConfig)
  ]
})
export class LaundryCategoriesModule { }
