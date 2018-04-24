import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {OrderComponent} from "./order.component";

@Injectable()
export class LeaveOrderGuard implements CanDeactivate<OrderComponent>{
    constructor(){}

    canDeactivate(
        orderComponent: OrderComponent,
        activitedRoute: ActivatedRouteSnapshot,
        routeState: RouterStateSnapshot): boolean{
        if(!orderComponent.isOrderCompleted()){
            return window.confirm('Deseja desistir da compra?')
        }else{
            return true
        }
    }
}