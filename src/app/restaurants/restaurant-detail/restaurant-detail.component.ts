import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from "../restaurants.service";
import {Restaurant} from "../restaurant/restaurant.model";
import {ActivatedRoute} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styles: [],
  animations: [
    trigger('restaurantDetailAppeared', [
      state('ready', style({
        opacity: 1
      })),
      transition('void => ready',[
        style({
          opacity: 0,
          transform: 'translateY(-20px)'
        }),
        animate('400ms 0s ease-in')
      ])
    ])
  ]
})
export class RestaurantDetailComponent implements OnInit {

  restaurantDetailState = 'ready'

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
