import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order-sumary',
  templateUrl: './order-sumary.component.html',
  styles: []
})
export class OrderSumaryComponent implements OnInit {

  rated: boolean

  constructor() { }

  ngOnInit() {

  }

  rate(): boolean{
    return this.rated = true
  }

}
