import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    public tasks: any[] = [];

  constructor(private _http: HttpClient, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.queryParamMap
        .map((params: ParamMap) => params.get('search'))
        .subscribe((search: string) => {
            this._http.get(`https://nztodo.herokuapp.com/api/task/?format=json&search=${search}`)
                .subscribe((tasks: any[]) => {
                    this.tasks = tasks;
                }); 
        });
  }

}
