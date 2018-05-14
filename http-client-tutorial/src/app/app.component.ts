import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpResponse } from 'selenium-webdriver/http';
import { LoginService } from './login.service';
import 'rxjs/add/operator/filter';


export interface ITask {
    title: string;
    description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private _httpService: HttpClient, private _loginService: LoginService) {}

  public ngOnInit() {
      this._loginService.isLoggedIn
        .filter((isLoggedIn) => isLoggedIn)
        .subscribe(() => {
            this._httpService
            .get<ITask[]>('/api/task/', {
                observe: 'events'
            })
            .subscribe((tasks: HttpResponse) => {
                // const taskDate = tasks[0].date;
            }, (res: HttpErrorResponse) => {

            });
        })
      
  }
}
