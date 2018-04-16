import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from "../restaurants.service";
import {Restaurant} from "../restaurant/restaurant.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styles: []
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant
  idParam: string = this.route.snapshot.params['id']

  constructor(
      private restaurantService: RestaurantsService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.restaurantService.restaurantById(this.idParam)
        .subscribe(restaurant => this.restaurant = restaurant)
  }

}
