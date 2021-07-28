import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFooterComponent } from './news-footer.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [NewsFooterComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        NewsFooterComponent: {
          component: NewsFooterComponent
        }
      }
    } as CmsConfig)
  ]
})
export class NewsFooterModule { }
