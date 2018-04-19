import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {NotificationService} from "../notification.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations:[
    trigger('snack-visibility',[
      state('hidden', style({
        opacity: 0,
        bottom: 0
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string

  snackVisibility: string = 'hidden'

  constructor(
      private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.notificationService.notifier
        //Permite executar uma ação no instante que a messagem chega
        .do(message => {
          this.message = message
          this.snackVisibility = 'visible'
        })
        //Encadea os eventos de objetos
        //Realiza o unsubscribe de evento anterior para poder dar sequência ao novo evento
        .switchMap(message => Observable
            .timer(3000))
        .subscribe(timer => this.snackVisibility = 'hidden')
  }

}
