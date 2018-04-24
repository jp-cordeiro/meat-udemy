import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs/Observable";

import {MEAT_API} from "../../app.api";
import {User} from "./user.model";

import 'rxjs/add/operator/do'
import 'rxjs/add/operator/filter'
import {NavigationEnd, Router} from "@angular/router";

@Injectable()
export class LoginService{

    user: User
    lastUrl: string

    constructor(
        private http: HttpClient,
        private router: Router
    ){
        this.router.events
            .filter(e => e instanceof NavigationEnd)
            .subscribe((e: NavigationEnd) => this.lastUrl = e.url)
    }

    isLogedInd(): boolean{
         return this.user !== undefined
    }

    login(email: string, password: string) :Observable<User>{
        return this.http
            .post<User>(`${MEAT_API}/login`,
            {
                email: email,
                password: password
            })
            .do(user => {
                this.user = user
                localStorage.setItem('accessToken',user.accessToken)
            })
    }

    handleLogin(path: string = this.lastUrl): void{
            this.router.navigate(['/login', btoa(path)])
    }

    logout(): boolean{
        localStorage.removeItem('accessToken')
        this.user = undefined
        return false
    }
}