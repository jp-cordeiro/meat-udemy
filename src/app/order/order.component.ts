import { Component, OnInit } from '@angular/core';
import {RadioOption} from "../shared/radio/radio-opition.model";
import {OrderService} from "./order.service";
import {CartItem} from "../restaurants/restaurant-detail/shopping-cart/cart-item.model";
import {Order, OrderItem} from "./order.model";
import {Router} from "@angular/router";

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent implements OnInit {

  delivery: number = 8

  paymentOptions: RadioOption[] = [
    {
      label: 'Dinheiro',
      value: 'MON'
    },
    {
      label: 'Cartão de Débito',
      value: 'DEB'
    },
    {
      label:'Cartão Refeição',
      value: 'REF'
    }
  ]

  constructor(
      private orderService: OrderService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  itemsValue(): number{
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem): void{
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem): void{
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem): void{
    this.orderService.removeItem(item)
  }

  checkOrder(order: Order){
    order.orderItems = this.cartItems()
    //Com o map estamos transformando um array de cartItems em um array de OrderItems
        .map(
            (item:CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order)
        .subscribe((orderId: string) => {
      console.log(`Compra concluída: ${orderId}`)
          this.orderService.clear()
          this.router.navigate(['/order-sumary'])
        })
  }
}
