import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from "../../restaurants.service";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styles: []
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>
  //Acesso ao parametro filho por intermedio do prametro pai
  idParam: string = this.route.parent.snapshot.params['id']

  constructor(
      private restauranService: RestaurantsService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.reviews = this.restauranService.reviewsOfRestaurant(this.idParam)
  }

}
