import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import construct = Reflect.construct;
import {LoginService} from "./login/login.service";

@Injectable()

export class LogedIdGuard implements CanLoad, CanActivate{

    constructor(
        private loginService: LoginService
    ){}

    checkAuthentication(path: string): boolean{
        const loggendInd = this.loginService.isLogedInd()

        if(!loggendInd){
            this.loginService.handleLogin(`/${path}`)
        }
        return loggendInd
    }

    canLoad(route: Route): boolean{
        return this.checkAuthentication(route.path)
    }

    canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean{
        return this.checkAuthentication(activatedRoute.routeConfig.path)
    }

}
