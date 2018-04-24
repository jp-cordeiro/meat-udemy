import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../security/login/login.service";
import {User} from "../../security/login/user.model";

@Component({
  selector: 'mt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(
      private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  user(): User{
    return this.loginService.user
  }

  isLoggedId(): boolean{
    return this.loginService.isLogedInd()
  }

  login(){
    this.loginService.handleLogin()
  }

  logout(){
    this.loginService.logout()
  }
}
