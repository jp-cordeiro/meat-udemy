import { Component, OnInit } from '@angular/core';
import {RadioOption} from "../shared/radio/radio-opition.model";
import {OrderService} from "./order.service";
import {CartItem} from "../restaurants/restaurant-detail/shopping-cart/cart-item.model";
import {Order, OrderItem} from "./order.model";
import {Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

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

  orderForm: FormGroup

  /*Regex e-mail*/
  emailPatern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  /*Reges number*/
  numberPatern = /^[0-9]*$/

  constructor(
      private orderService: OrderService,
      private router: Router,
      private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      email: ['',
        [
          Validators.required,
          Validators.pattern(this.emailPatern)
        ]],
      emailConfirmation: ['',
        [
          Validators.required,
          Validators.pattern(this.emailPatern)
        ]],
      address: this.formBuilder.control('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      number: this.formBuilder.control('',[
        Validators.required,
        Validators.pattern(this.numberPatern)
      ]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('',[
        Validators.required
      ])
    }, {
      validator: OrderComponent.equalsTo
    })
  }

  static equalsTo(group: AbstractControl): {[key:string]: boolean}{
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')

    if(!email || !emailConfirmation){
      return undefined
    }

    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch: true}
    }
    return undefined
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
    console.log(order)
    // order.orderItems = this.cartItems()
    // //Com o map estamos transformando um array de cartItems em um array de OrderItems
    //     .map(
    //         (item:CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    // this.orderService.checkOrder(order)
    //     .subscribe((orderId: string) => {
    //   console.log(`Compra concluída: ${orderId}`)
    //       this.orderService.clear()
    //       this.router.navigate(['/order-sumary'])
    //     })
  }
}
