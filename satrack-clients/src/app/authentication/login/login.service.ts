import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, finalize, catchError, timeout } from 'rxjs/operators';
import { forkJoin, of, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }

  public login(user:string,password:string){
    
    const body = {user,password};
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,Autorizathion:token     
      })
    };
    return this.http.post('http://www.mocky.io/v2/5d8a5c343000006500b9a91a', body, options)
      .pipe(
        map((e: any) => {
          return e;
        }),
        // catchError(err => of({ response: false }))
      );
  }
}

