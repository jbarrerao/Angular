import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, finalize, catchError, timeout } from 'rxjs/operators';
import { forkJoin, of, from } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class DataProvider {

    public get user() : string {
        return sessionStorage.getItem('user');
    }

    public set user(v : string ){
        sessionStorage.setItem('user',v);
    }
  }
  