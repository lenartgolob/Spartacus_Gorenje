import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoComponent } from './contact-info.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [ContactInfoComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ContactInfoComponent: {
          component: ContactInfoComponent
        }
      }
    } as CmsConfig)
  ]
})
export class ContactInfoModule { }
