import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {RadioOption} from "./radio-opition.model";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'mt-radio-container',
  templateUrl: './radio.component.html',
  styles: [],
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioComponent),
    multi: true
  }]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input()
  options: RadioOption[] = []

  value: any

  onChange: any

  constructor() { }

  ngOnInit() {
  }

  /**
   * Quando um diretiva quiser passar algum valor ao componente
   * @param obj
   */
  writeValue(obj: any): void {
    this.value = obj
  }

  /**
   * A função é chamada sempre que o compenente mudar.
   * Dessa forma as diretivas que irão estar utilizando o componente serão avisadas da mudança
   * @param fn
   */
  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  /**
   * Registra que o usuário entrou no componente
   * @param fn
   */
  registerOnTouched(fn: any): void {

  }

  setDisabledState(isDisabled: boolean): void {

  }

  setValue(value: any): void{
    this.value = value
    /**
     * Aviso para as diretivas referente a mudança de valor do componente
     */
    this.onChange(this.value)
  }

}
