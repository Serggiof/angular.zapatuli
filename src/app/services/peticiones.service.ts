//En este componente hacermos todas las peticiones, ajax y otras
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class PeticionesService{
    public url: string 

    constructor(
        public _http: HttpClient
    ){
        this.url = "https://reqres.in/"
    }
    //Creamos un metodo para hacer una peticion del el usuario de la api
    getUser(userId:any): Observable<any> {
        return this._http.get(this.url + 'api/users/'+ userId)
    }
}