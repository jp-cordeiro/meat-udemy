import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItem} from "../../restaurants/restaurant-detail/shopping-cart/cart-item.model";

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
  styles: []
})
export class OrderItemsComponent implements OnInit {

  @Input()
  items: CartItem[]

  @Output()
  increaseQty = new EventEmitter<CartItem>()
  @Output()
  decreaseQty = new EventEmitter<CartItem>()
  @Output()
  remove = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIcreaseQty(item: CartItem): void{
    this.increaseQty.emit(item)
  }

  emitDecreaseQty(item: CartItem): void{
    this.decreaseQty.emit(item)
  }
  emitRemove(item: CartItem): void{
    this.remove.emit(item)
  }

}