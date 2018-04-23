import {Injectable} from "@angular/core";
import {ShoppingCartService} from "../restaurants/restaurant-detail/shopping-cart/shopping-cart.service";
import {CartItem} from "../restaurants/restaurant-detail/shopping-cart/cart-item.model";
import {Order, OrderItem} from "./order.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import {MEAT_API} from "../app.api";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "../security/login/login.service";

@Injectable()
export class OrderService{
    constructor(
        private cartService: ShoppingCartService,
        private http: HttpClient,
        private loginService: LoginService
    ){}

    cartItems(): CartItem[]{
        return this.cartService.items
    }

    increaseQty(item: CartItem): void{
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem): void{
        this.cartService.decreaseQty(item)
    }

    removeItem(item: CartItem): void{
        this.cartService.removeItem(item)
    }

    itemsValue(): number{
        return this.cartService.total()
    }

    clear(): void{
            this.cartService.clear()
    }

    checkOrder(order: Order): Observable<string>{

            let headers = new HttpHeaders()
        if(this.loginService.isLogedInd()){
                headers = headers.set('Autorization',`Bearer ${this.loginService.user.accessToken}`)
        }

        return this.http
            .post<Order>(
                `${MEAT_API}/orders`,
                order,
                {headers: headers}
            )
            .map(order => order.id)
    }
}