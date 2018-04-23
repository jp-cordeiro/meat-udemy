import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import {HttpErrorResponse} from "@angular/common/http";

export class ErrorHandle{
    static handleError(error: Response | any){
        let errorMessage: string

        if(error instanceof  HttpErrorResponse){
            const body = error.error

            errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
        }else{
            errorMessage = error.message ? error.message : error.toString()
        }

        console.log(errorMessage)

        return Observable.throw(errorMessage)
    }
}