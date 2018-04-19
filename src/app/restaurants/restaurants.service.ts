import {Restaurant} from "./restaurant/restaurant.model";
import {Injectable} from "@angular/core";
import {MEAT_API} from "../app.api";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {Http} from "@angular/http";
import {ErrorHandle} from "../app.error-handler";
import {MenuItem} from "./restaurant-detail/menu-item.model";

@Injectable()
export class RestaurantsService{
    constructor(
        private http: Http
    ){}

    restaurants(search?: string): Observable<Restaurant[]>{
        return this.http
            .get(`${MEAT_API}/restaurants`,{params:{q:search}})
            .map(response => response.json())
            .catch(ErrorHandle.handleError)
    }

    restaurantById(id: string): Observable<Restaurant>{
        return this.http
            .get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
            .catch(ErrorHandle.handleError)
    }

    reviewsOfRestaurant(id: string) : Observable<any>{
            return this.http
                .get(`${MEAT_API}/restaurants/${id}/reviews`)
                .map(response => response.json())
                .catch(ErrorHandle.handleError)
    }

    menuOfRestaurant(id: string): Observable<MenuItem>{
        return this.http
            .get(`${MEAT_API}/restaurants/${id}/menu`)
            .map(response => response.json())
            .catch(ErrorHandle.handleError)
    }
}