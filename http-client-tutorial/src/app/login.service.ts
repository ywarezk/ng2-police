import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/do';

@Injectable()
export class LoginService {
    public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public jwtToken: string = '';


    constructor(private _http: HttpClient) { }

    public login(email, password): Observable<any> {
        return this._http.post('/api/login/', {
            email: email,
            password: password
        })
        .do((json: any) => {
            this.jwtToken = json.jwt;
            this.isLoggedIn.next(true);
            localStorage.setItem('token', this.jwtToken);
        })
    }
  

}
