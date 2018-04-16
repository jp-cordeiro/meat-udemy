import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestaurantsService} from "../../restaurants.service";
import {Observable} from "rxjs/Observable";
import {MenuItem} from "../menu-item.model";

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem>
  idParam: string = this.route.parent.snapshot.params['id']

  constructor(
      private restauranService: RestaurantsService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu = this.restauranService.menuOfRestaurant(this.idParam)
  }

}
