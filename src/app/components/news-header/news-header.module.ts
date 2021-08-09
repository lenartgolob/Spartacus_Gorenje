import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsHeaderComponent } from './news-header.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [NewsHeaderComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        NewsHeader: {
          component: NewsHeaderComponent
        }
      }
    } as CmsConfig)
  ]
})
export class NewsHeaderModule { }
