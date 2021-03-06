import {Routes} from '@angular/router'
import {HomeComponent} from "./home/home.component";
import {RestaurantsComponent} from "./restaurants/restaurants.component";
import {RestaurantDetailComponent} from "./restaurants/restaurant-detail/restaurant-detail.component";
import {MenuComponent} from "app/restaurants/restaurant-detail/menu/menu.component";
import {ReviewsComponent} from "./restaurants/restaurant-detail/reviews/reviews.component";
import {OrderComponent} from "./order/order.component";
import {OrderSumaryComponent} from "./order/order-sumary/order-sumary.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LoginComponent} from "./security/login/login.component";
import {LogedIdGuard} from "./security/logedIn.guard";

export const ROUTES: Routes = [
    {
        path:'', component: HomeComponent
    },
    {
        path:'login', component: LoginComponent
    },
    {
        path:'login/:to', component: LoginComponent
    },
    {
        path:'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            {
                path:'',
                redirectTo:'menu',
                pathMatch:'full'
            },
            {
                path:'menu', component: MenuComponent
            },
            {
                path:'reviews', component: ReviewsComponent
            }
        ]
    },
    {
        path:'restaurants', component: RestaurantsComponent
    },
    {
        path:'order',
        loadChildren: './order/order.module#OrderModule',
        canLoad: [LogedIdGuard],
        canActivate: [LogedIdGuard]
    },
    {
        path: 'order-sumary',component:OrderSumaryComponent
    },
    {
        path:'about', loadChildren: './about/about.module#AboutModule'
    },
    {
        path: '**', component: NotFoundComponent
    }
]