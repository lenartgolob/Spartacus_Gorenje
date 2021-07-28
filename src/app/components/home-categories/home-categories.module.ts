import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCategoriesComponent } from './home-categories.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [HomeCategoriesComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        HomeCategoriesComponent: {
          component: HomeCategoriesComponent
        }
      }
    } as CmsConfig)
  ]
})
export class HomeCategoriesModule { }
