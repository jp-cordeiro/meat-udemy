import {Restaurant} from "./restaurant/restaurant.model";
import {Injectable} from "@angular/core";
import {MEAT_API} from "../app.api";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {MenuItem} from "./restaurant-detail/menu-item.model";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class RestaurantsService{
    constructor(
        private http: HttpClient
    ){}

    restaurants(search?: string): Observable<Restaurant[]>{
        let params: HttpParams = undefined
        if(search){
            params = new HttpParams().set('q',search)
        }
        return this.http
            .get<Restaurant[]>(`${MEAT_API}/restaurants`,{params: params})
        //.map(response => response.json())
        //.catch(ErrorHandle.handleError)
    }

    restaurantById(id: string): Observable<Restaurant>{
        return this.http
            .get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
        //.map(response => response.json())
        //.catch(ErrorHandle.handleError)
    }

    reviewsOfRestaurant(id: string) : Observable<any>{
        return this.http
            .get(`${MEAT_API}/restaurants/${id}/reviews`)
        //.map(response => response.json())
        //.catch(ErrorHandle.handleError)
    }

    menuOfRestaurant(id: string): Observable<MenuItem>{
        return this.http
            .get<MenuItem>(`${MEAT_API}/restaurants/${id}/menu`)
        //.map(response => response.json())
        //.catch(ErrorHandle.handleError)
    }
}