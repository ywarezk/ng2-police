import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    public tasks: any[] = [];

  constructor(private _http: HttpClient, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //   this._http.get('https://nztodo.herokuapp.com/api/task/?format=json')
    //     .subscribe((tasks: any[]) => {
    //         this.tasks = tasks;
    //     });        

    this._activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
        console.log(params.get('search'));
    });
  }

}
