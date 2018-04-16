import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "./shopping-cart.service";

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styles: []
})
export class ShoppingCartComponent implements OnInit {

  constructor(
      private shoppinCartService: ShoppingCartService
  ) { }

  ngOnInit() {
  }

  items(): any[]{
    return this.shoppinCartService.items
  }

  total(): number{
    return this.shoppinCartService.total()
  }

  addItem(item: any){
    this.shoppinCartService.addItem(item)
  }

  removeItem(item: any){
    this.shoppinCartService.removeItem(item)
  }

  clear(): void{
    this.shoppinCartService
  }

}
