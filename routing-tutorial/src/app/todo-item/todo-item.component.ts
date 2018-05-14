import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
    public task: any;
    public task$: Observable<any>;

  constructor(private _http: HttpClient, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.task$ = this._activatedRoute.paramMap
        .map((params: ParamMap) => params.get('id'))
        .mergeMap((id: string) => {
            return this._http.get(`https://nztodo.herokuapp.com/api/task/${id}/?format=json`);
        });
        //  .subscribe((json) => {
        //     this.task = json;
        // })
  }

}
