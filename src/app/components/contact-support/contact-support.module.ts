import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactSupportComponent } from './contact-support.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [ContactSupportComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ContactSupportComponent: {
          component: ContactSupportComponent
        }
      }
    } as CmsConfig)
  ]
})
export class ContactSupportModule { }
