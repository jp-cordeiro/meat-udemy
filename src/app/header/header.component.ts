import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'mt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // public autenticado(): boolean {
  //   if(this.token_id === undefined && localStorage.getItem('idToken') != null){
  //     this.token_id = localStorage.getItem('idToken')
  //   }else if(this.token_id === undefined){
  //     this.router.navigate(['/'])
  //   }
  //   //retorna o valor da expressão lógica da expressão de comparação
  //   return this.token_id !== undefined
  // }
}
