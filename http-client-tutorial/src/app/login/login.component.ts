import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public email = '';
    public password = '';

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
  }

  public login() {
    this._loginService.login(this.email, this.password).subscribe();
    // .post('/api/login/', {
    //     email: this.email,
    //     password: this.password
    // }).subscribe((json: any) => {
    //     console.log(`our jwt token is: ${json.jwt}`);
    //     this._http.get('/api/task/', {
    //         headers: {
    //             'Authorization': `Bearer ${json.jwt}`
    //         }
    //     }).subscribe();
    // })
  }

}
