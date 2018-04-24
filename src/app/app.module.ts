import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, LOCALE_ID, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {PreloadAllModules, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {ROUTES} from "./app.routes";
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurants/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurants/restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurants/restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurants/restaurant-detail/reviews/reviews.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SharedComponent } from './shared/shared.component';
import { OrderSumaryComponent } from './order/order-sumary/order-sumary.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NotFoundComponent } from './not-found/not-found.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component';
import {ApplicationErrorHandle} from "./app.error-handler";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    SharedComponent,
    OrderSumaryComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES,{preloadingStrategy: PreloadAllModules}),
    ReactiveFormsModule,
    SharedModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
      //# na URL para o servidor http
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: ErrorHandler, useClass: ApplicationErrorHandle}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
