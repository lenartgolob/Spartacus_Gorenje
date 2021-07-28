import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookingCategoriesModule } from "./components/cooking-categories/cooking-categories.module";
import { CoolingCategoriesComponent } from "./components/cooling-categories/cooling-categories.component";
import { CoolingCategoriesModule } from "./components/cooling-categories/cooling-categories.module";
import { DishwashersCategoriesModule } from "./components/dishwashers-categories/dishwashers-categories.module";
import { HomeCategoriesModule } from "./components/home-categories/home-categories.module";
import { LaundryCategoriesModule } from "./components/laundry-categories/laundry-categories.module";
import { NewsFooterModule } from "./components/news-footer/news-footer.module";
import { SpartacusModule } from './spartacus/spartacus.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    BrowserTransferStateModule,
    CoolingCategoriesModule,
    CookingCategoriesModule,
    DishwashersCategoriesModule,
    LaundryCategoriesModule,
    HomeCategoriesModule,
    NewsFooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
