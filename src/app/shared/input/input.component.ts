import {AfterContentInit, Component, ContentChild, Input, OnInit} from '@angular/core';
import {FormControlName, NgModel} from "@angular/forms";

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
  styles: []
})
export class InputComponent implements OnInit, AfterContentInit {

  input: any

  @Input()
  label: string
  @Input()
  errorMessage: string
  @Input()
  showTip: boolean = true

  @ContentChild
  (NgModel) model: NgModel

  @ContentChild(FormControlName)
  control: FormControlName

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.model || this.control
    if(this.input === undefined){
      throw  new Error('Erro ao carregar componente.')
    }
  }

  hasSuccess(): boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }
}
